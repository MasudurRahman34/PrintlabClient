import React, { useMemo, useState } from "react";

import PrintType from "./PrintType";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCombinationForThisProductQuery,
  getProductsAttributeCombinationQuery,
} from "@/resolvers/query";
import SelectBox from "./SelectBox";
import DeliveryChoose from "./DeliveryChoose";
import TotalCounter from "./TotalCounter";
import Loader from "@/components/Loader/Loader";

const Combination = ({ data }) => {
  const [userSelectedOptions, setUserSelectedOptions] = useState({});

  const { data: allCombination } = useQuery({
    queryKey: ["all_combination_for_this_product", data?.data.id],
    queryFn: () =>
      getAllCombinationForThisProductQuery({ product_id: data?.data.id }),
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

  console.log(matched);

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

  return (
    <div className="md:flex-1">
      <div>
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-secondgraphy">
          {data?.data.title}
        </h1>
      </div>
      <div className="py-5">
        {isLoading ? (
          <Loader/>
        ) : isError ? (
          <p>Error</p>
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
        <DeliveryChoose />
        <PrintType />
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
                {" "}
                {matched ? matched.price : "0"}{" "}
              </strong>{" "}
              Ex VAT
            </p>
            <p className="text-xs">
              <strong>{matched ? matched.price : "0"}</strong> Inc VAT
            </p>
            <p className="text-xs">
              use the toggle at the top to change VAT preferences
            </p>
          </div>
        </div>
        <div className="py-5">
          <button className="w-full py-2.5 text-lg font-bold  border-2 bg-primary-light border-primary hover:bg-primary transition-colors duration-150">
            Add to basket
          </button>
        </div>
      </div>
      <TotalCounter price={matched?.price} />
    </div>
  );
};

export default Combination;
