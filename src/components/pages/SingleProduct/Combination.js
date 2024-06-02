import React, { memo, useEffect, useMemo, useState } from "react";

import PrintType from "./PrintType";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllCombinationForThisProductQuery,
  getProductsAttributeCombinationQuery,
} from "@/resolvers/query";
import SelectBox from "./SelectBox";
import DeliveryChoose from "./DeliveryChoose";
import TotalCounter from "./TotalCounter";
import Loader from "@/components/Loader/Loader";
import { addToCartMutation } from "@/resolvers/mutation";
import { calculateTotal } from "@/lib/utils";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Combination = ({ data, isProductLoading }) => {
  const [userSelectedOptions, setUserSelectedOptions] = useState({});
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [selectedPrintType, setSelectedPrintType] = useState({
    parent: null,
    children: null,
  });

  const { data: allCombination } = useQuery({
    queryKey: ["all_combination_for_this_product", data?.data.id],
    queryFn: () =>
      getAllCombinationForThisProductQuery({ product_id: data?.data.id }),
    enabled: !!data?.data.id,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "add_to_cart",
    mutationFn: addToCartMutation,
  });

  // I need a function which will push to userSelectedOptions array when user select an option from SelectBox

  const handleSelect = ({ attribute_id, attribute_option_id }) => {
    // if attribute_id is already in userSelectedOptions then update the attribute_option_id

    if (userSelectedOptions[attribute_id]) {
      setUserSelectedOptions({
        ...userSelectedOptions,
        [attribute_id]: attribute_option_id,
      });
    } else {
      setUserSelectedOptions({
        ...userSelectedOptions,
        [attribute_id]: attribute_option_id,
      });
    }
  };

  // make a useEffect where I will check if all the options are selected then I will make a query to get the price of the selected combination default value will be all the options first value

  const {
    data: combination_data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`product-${data?.data.slug}`, data?.data.id],
    queryFn: () =>
      getProductsAttributeCombinationQuery({ product_id: data?.data.id }),
    enabled: !!data?.data.id,
  });

  const matched = useMemo(() => {
    if (allCombination?.data) {
      const selectedOptions = Object.values(userSelectedOptions)
        .sort((a, b) => a - b)
        .map((item) => item.toString());
      const selectedOptionsString = selectedOptions.join(",");
      const matchedCombination = allCombination?.data.filter((item) => {
        const combinationOptions = item.combination.join(",");

        return combinationOptions === selectedOptionsString;
      });

      return matchedCombination[0];
    }
  }, [userSelectedOptions, allCombination?.data]);

  // Add to card will be handled here with the selected options
  const addToCart = () => {
    const variables = {
      product_id: data?.data.id,
      product_combination_id: matched.id,
      delivery_service_id: selectedDelivery.id,
      artwork_service_id: selectedPrintType.children
        ? selectedPrintType.children.id
        : selectedPrintType.parent.id,
      sku: matched.sku,
      combinations: `[${matched.combination}]`,
      combination_string: matched.combination_string,
      is_upload_artwork: selectedPrintType.children
        ? selectedPrintType.children.is_upload_artwork
          ? 1
          : 0
        : selectedPrintType.parent.is_upload_artwork
        ? 1
        : 0,
      is_design_service: selectedPrintType.children
        ? selectedPrintType.children.is_design_service
          ? 1
          : 0
        : selectedPrintType.parent.is_design_service
        ? 1
        : 0,

      price: matched.price,
      delivery_service_charge: selectedDelivery.cost,
      artwork_service_charge: selectedPrintType.children
        ? selectedPrintType.children.cost
        : selectedPrintType.parent.cost,
      quantity: 1,
      discount: 0,
      tax: 0,
      total: calculateTotal({
        price: matched.price,
        delivery_charge: selectedDelivery?.cost,
        artwork_charge: selectedPrintType?.children
          ? selectedPrintType?.children?.cost
          : selectedPrintType?.parent?.cost,
        calc: true,
      }),
    };

    mutate(
      {
        variables,
      },
      {
        onSuccess: () => {
          toast.success("Product added to cart");
        },
        onError: () => {
          toast.error("Something went wrong");
        },
      }
    );
  };

  useEffect(() => {
    if (combination_data?.data.length > 0) {
      const temp = {};

      combination_data?.data.map((option) => {
        temp[option.id] = option.ProductOptions[0].attribute_option_id;
      });

      setUserSelectedOptions(temp);
    }
  }, [combination_data?.data]);

  return (
    <div className="md:flex-1">
      <div>
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-secondgraphy">
          {data?.data.title}
        </h1>
      </div>
      <div className="py-5">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p></p>
        ) : (
          combination_data?.data?.map((item, index) => (
            <div key={index}>
              {item.type.label === "Select" && (
                <SelectBox
                  handleSelect={handleSelect}
                  attribute_id={item.id}
                  data={item}
                  title={item.title}
                  options={item.ProductOptions}
                />
              )}
            </div>
          ))
        )}
        <div>
          <p className="text-secondgraphy">Prices shown are exclusive of VAT</p>
        </div>
      </div>
      <div className="py-5">
        <DeliveryChoose
          product_id={data?.data.id}
          selectedDelivery={selectedDelivery}
          setSelectedDelivery={setSelectedDelivery}
        />
        <PrintType
          selectedPrintType={selectedPrintType}
          setSelectedPrintType={setSelectedPrintType}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between w-full gap-5">
          <div>
            <h1>
              <strong className="text-2xl">Estimated TOTAL</strong>
              <p>Price shown are exclusive of VAT</p>
            </h1>
          </div>
          <div className="text-right">
            <p className="text-sm">
              <strong className="text-xl font-bold">
                £{" "}
                {matched &&
                  calculateTotal({
                    price: matched.price,
                    delivery_charge: selectedDelivery?.cost,
                    artwork_charge: selectedPrintType?.children
                      ? selectedPrintType?.children?.cost
                      : selectedPrintType?.parent?.cost,
                  })}
              </strong>{" "}
              Ex VAT
            </p>
            <p className="text-xs">
              <strong>
                £{" "}
                {matched &&
                  calculateTotal({
                    price: matched.price,
                    delivery_charge: selectedDelivery?.cost,
                    artwork_charge: selectedPrintType?.children
                      ? selectedPrintType?.children?.cost
                      : selectedPrintType?.parent?.cost,
                  })}
              </strong>{" "}
              Inc VAT
            </p>
            <p className="text-xs">
              use the toggle at the top to change VAT preferences
            </p>
          </div>
        </div>
        <div className="py-5">
          <button
            className="w-full py-2.5 text-lg font-bold  border-2 bg-primary-light border-primary hover:bg-primary transition-colors duration-150 flex items-center justify-center"
            onClick={addToCart}
            disabled={isPending}
          >
            {isPending ? (
              <AiOutlineLoading3Quarters className="text-2xl text-[#AAAAAA] animate-spin flex items-center justify-center" />
            ) : (
              "Add to Basket"
            )}
          </button>
        </div>
      </div>
      <TotalCounter
        isPending={isPending}
        addToCard={addToCart}
        excVatPrice={calculateTotal({
          price: matched?.price,
          delivery_charge: selectedDelivery?.cost,
          artwork_charge: selectedPrintType?.children
            ? selectedPrintType?.children?.cost
            : selectedPrintType?.parent?.cost,
        })}
        incVatPrice={calculateTotal({
          price: matched?.price,
          delivery_charge: selectedDelivery?.cost,
          artwork_charge: selectedPrintType?.children
            ? selectedPrintType?.children?.cost
            : selectedPrintType?.parent?.cost,
        })}
      />
    </div>
  );
};

export default memo(Combination);
