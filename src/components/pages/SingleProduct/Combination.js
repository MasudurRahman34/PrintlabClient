import React, { memo, useEffect, useMemo, useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
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
import { calculateTotal, formatPrice, isEmptyObject } from "@/lib/utils";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ColorRadio from "./ColorRadio";
import MobileNav from "@/components/Footer/MobileNav";
import useToastMessage from "@/hooks/useToastMessage";
import Increament from "./Increament";
import CustomQuantity from "./CustomQuantity";
import Link from "next/link";

const Combination = ({ data, isProductLoading, total_refetch, cart_items }) => {
  const showToastMessage = useToastMessage();
  const [quantity, setQuantity] = useState(1);
  const [quantityVariation, setQuantityVariation] = useState({});
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
  //  console.log("product_data", data);

  const matched = useMemo(() => {
    if (allCombination?.data) {
      const selectedOptions = Object.values(userSelectedOptions)
        .sort((a, b) => a - b)
        .map((item) => item.toString());
      const selectedOptionsString = selectedOptions.join(",");

      const matchedCombination = allCombination?.data.filter((item) => {
        const combinationOptions = item.combination
          .sort((a, b) => a - b)
          .join(",");

        return combinationOptions === selectedOptionsString;
      });

      return matchedCombination[0];
    }
  }, [userSelectedOptions, allCombination?.data]);

  console.log(matched);

  // Calculate total price of the product with selected options and quantity
  const { total } = useMemo(() => {
    let total = 0;
    if (matched) {
      const calculateVariables = {
        price: matched?.price,
        delivery_charge: selectedDelivery?.cost,
        artwork_charge: selectedPrintType?.children
          ? selectedPrintType?.children?.cost
          : selectedPrintType?.parent?.cost,
        quantity: quantity,
      };

      if (matched?.quantity_rule) {
        calculateVariables.increment = matched?.increment;
        calculateVariables.per_quantity_price = matched?.per_increment_price;
        calculateVariables.calculationType = matched?.calculation_type;
        calculateVariables.reduction_percentage =
          matched?.reduction_percentage > 0 ? matched?.reduction_percentage : 0;
        calculateVariables.min_quantity = matched?.min_quantity;
      }

      total = calculateTotal(calculateVariables);
    }

    return { total };
  }, [
    matched,
    selectedDelivery,
    selectedPrintType,
    quantity,
    data?.data?.productQuantityRule,
  ]);

  useEffect(() => {
    if (matched) {
      setQuantity(matched?.min_quantity);
    }
  }, [matched]);

  // Add to card will be handled here with the selected options
  const addToCart = () => {
    if (!selectedDelivery || !selectedPrintType) {
      toast.error("Please select delivery and print type");
      return;
    }

    if (!matched) {
      toast.error("Combination not found. Please select another one");
      return;
    }

    if (matched.price === 0) {
      toast.error("This Product is not available. Please select another one");
      return;
    }

    const variables = {
      product_id: data?.data.id,
      product_combination_id: matched.id,
      delivery_service_id: selectedDelivery.id,
      artwork_service_id: selectedPrintType.children
        ? selectedPrintType.children.id
        : selectedPrintType.parent.id,
      sku: matched.sku,
      combination: `[${matched.combination}]`,
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
      quantity: quantity,
      discount: 0,
      tax: 0,
      total,
    };

    if (!isEmptyObject(quantityVariation))
      variables.quantity_variation = JSON.stringify(quantityVariation);

    mutate(
      {
        variables,
      },
      {
        onSuccess: () => {
          total_refetch();
          toast.success("Product added to cart");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  useEffect(() => {
    if (combination_data?.data && combination_data?.data.length > 0) {
      const temp = {};

      combination_data?.data.map((option) => {
        temp[option.id] = option.ProductOptions[0].attribute_option_id;
      });

      setUserSelectedOptions(temp);
    }
  }, [combination_data?.data]);

  return (
    <div className="col-span-12 lg:col-span-7 ">
      <div>
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-secondgraphy">
          {data?.data.title}
        </h1>
      </div>
      <div className="py-5">
        {isLoading ? (
          <Loader />
        ) : combination_data?.error ? (
          <div className="w-full px-3 py-3 text-sm text-center border-2 bg-primary-light border-primary">
            <p className="font-bold">
              No combination found for this product. Please contact the support
            </p>
          </div>
        ) : (
          <>
            {combination_data?.data?.map((item, index) => {
              if (item.type.label === "Select") {
                return (
                  <SelectBox
                    key={index}
                    handleSelect={handleSelect}
                    attribute_id={item.id}
                    data={item}
                    title={item.title}
                    options={item.ProductOptions}
                  />
                );
              } else {
                return (
                  <ColorRadio
                    key={index}
                    handleSelect={handleSelect}
                    attribute_id={item.id}
                    data={item}
                    title={item.title}
                    userSelectedOptions={userSelectedOptions}
                    options={item.ProductOptions}
                  />
                );
              }
            })}

            {/* Checking if quantity variation contain or not if yes then show customisable quantity or show just incremental quantity */}
            {matched && matched.quantity_rule ? (
              data?.data?.quantity_option_status ? (
                <CustomQuantity
                  title="Quantity"
                  quantity={quantity}
                  setQuantity={setQuantity}
                  productQuantityRule={data?.data?.productQuantityRule}
                  product_id={data?.data.id}
                  quantityVariation={quantityVariation}
                  setQuantityVariation={setQuantityVariation}
                  matched={matched}
                />
              ) : (
                <Increament
                  title="Quantity"
                  quantity={quantity}
                  setQuantity={setQuantity}
                  matched={matched}
                  increment={matched?.increment}
                />
              )
            ) : null}
            <div className="mt-3">
              <p className="text-secondgraphy">
                <strong>SKU:</strong> {matched?.sku}
              </p>
              {matched && matched?.price <= 0 && (
                <p className="text-red-500">This product is not available</p>
              )}
              {!matched && (
                <p className="text-red-500">This product is not available</p>
              )}
            </div>
          </>
        )}
      </div>
      <div className="py-5">
        <div className="z-10 flex items-center justify-between w-full gap-4 px-3 py-3 mb-4 text-sm text-center border-2 bg-primary-light border-primary">
          <p className="flex items-center gap-2 text-sm font-medium">
            {" "}
            <MdOutlineMessage className="w-6 h-5" />
            Looking for something else?
          </p>
          <Link
            href={`/my-account/quote-request?newQuote=true`}
            className="px-10 py-2 text-white transition-all duration-150 rounded-md bg-secondgraphy hover:bg-secondary hover:text-secondgraphy"
          >
            Raise a new quote
          </Link>
        </div>
        <DeliveryChoose
          product_id={data?.data.id}
          selectedDelivery={selectedDelivery}
          setSelectedDelivery={setSelectedDelivery}
          total={total}
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
                {matched ? formatPrice(total) : formatPrice(0)}
              </strong>{" "}
              Ex VAT
            </p>
            <p className="text-xs">
              <strong>{matched ? formatPrice(total) : formatPrice(0)}</strong>{" "}
              Inc VAT
            </p>
            <p className="text-xs">
              use the toggle at the top to change VAT preferences
            </p>
          </div>
        </div>
        <div className="py-5">
          <button
            className="w-full py-2.5 text-lg font-bold  border-2 bg-primary-light border-primary hover:bg-primary transition-colors duration-150 disabled:bg-secondary disabled:opacity-40  flex items-center justify-center "
            onClick={addToCart}
            disabled={
              isPending ||
              !matched ||
              matched?.price <= 0 ||
              !selectedDelivery ||
              matched?.max_quantity < quantity ||
              quantity < matched?.min_quantity
            }
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
        matched={matched}
        max_quantity={matched?.max_quantity}
        selectedDelivery={selectedDelivery}
        quantity={quantity}
        excVatPrice={matched ? formatPrice(total) : formatPrice(0)}
        incVatPrice={matched ? formatPrice(total) : formatPrice(0)}
        min_quantity={matched?.min_quantity}
      />
      <MobileNav
        addToCard={addToCart}
        isPending={isPending}
        cart_items={cart_items}
        matched={matched}
        quantity={quantity}
        max_quantity={matched?.max_quantity}
        selectedDelivery={selectedDelivery}
        price={matched ? formatPrice(total) : formatPrice(0)}
        min_quantity={matched?.min_quantity}
      />
    </div>
  );
};

export default memo(Combination);
