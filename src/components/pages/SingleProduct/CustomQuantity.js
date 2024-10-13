import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { getQuantityOptionsQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo } from "react";

const CustomQuantity = ({
  title,
  quantity,
  setQuantity,
  productQuantityRule,
  product_id,
  quantityVariation,
  setQuantityVariation,
  matched,
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["quantity_options", product_id],
    queryFn: () => getQuantityOptionsQuery({ product_id }),
    enabled: !!product_id,
  });
  const totalQuantity = useMemo(() => {
    let total = 0;
    Object.keys(quantityVariation).map((key) => {
      Object.keys(quantityVariation[key]).map((item) => {
        total += isNaN(quantityVariation[key][item])
          ? 0
          : quantityVariation[key][item];
      });
    });

    setQuantity(total);
    return total;
  }, [quantityVariation]);

  useEffect(() => {
    if (data?.data && data?.data?.quantity_options) {
      const tempQuantityVariation = {};

      Object.keys(data?.data?.quantity_options).map((key) => {
        tempQuantityVariation[key] = {};
        (data?.data?.quantity_options[key].values).map((item) => {
          tempQuantityVariation[key][item] = 0;
        });
      });

      // need to set randomly on value is 1

      if (Object.keys(tempQuantityVariation).length > 0) {
        tempQuantityVariation[Object.keys(tempQuantityVariation)[0]][
          Object.keys(
            tempQuantityVariation[Object.keys(tempQuantityVariation)[0]]
          )[1]
        ] = matched?.min_quantity;
      }

      setQuantityVariation(tempQuantityVariation);
    }
  }, [data, matched]);

  if (!matched?.quantity_rule) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{title}</h3>
        <p>
          {matched?.min_quantity && (
            <span className="mr-4 text-xs text-gray-500">
              Min: {matched?.min_quantity}
            </span>
          )}
          {matched?.max_quantity && (
            <span className="text-xs text-gray-500">
              Max: {matched?.max_quantity}
            </span>
          )}
        </p>
      </div>
      <div>
        <div>
          {isLoading && <Loader />}
          {isError && <p>Error</p>}
          {data?.data && data?.data?.quantity_options && (
            <div>
              {Object.keys(data?.data?.quantity_options).map((key) => (
                <div
                  key={key}
                  className="w-full p-4 mt-4 overflow-x-auto border rounded-sm"
                >
                  <h4 className="mb-3 font-bold text-center">{key}</h4>
                  <table className="w-full">
                    <thead>
                      <tr>
                        {data?.data?.quantity_options[key].values.map(
                          (item) => (
                            <th key={item} className="text-center">
                              {item}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {data?.data?.quantity_options[key].values.map(
                          (item) => (
                            <td key={item} className="text-center">
                              <input
                                type="number"
                                min="0"
                                placeholder="0"
                                className="inline py-2 text-center border w-14"
                                value={
                                  quantityVariation[key] &&
                                  quantityVariation[key][item]
                                }
                                onChange={(e) => {
                                  const intValue = parseInt(e.target.value);
                                  setQuantityVariation({
                                    ...quantityVariation,
                                    [key]: {
                                      ...quantityVariation[key],
                                      [item]: intValue,
                                    },
                                  });
                                }}
                              />
                            </td>
                          )
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
              <div className="flex items-center justify-between w-full mt-4">
                <div>
                  <Button variant="ghost" className="p-0 font-bold underline">
                    Size Guide
                  </Button>
                </div>
                <div>
                  <p className="font-bold">
                    Total Quantity:{" "}
                    <span className="font-medium">{quantity}</span>
                  </p>
                </div>
              </div>
              {totalQuantity > matched?.max_quantity && (
                <p className="text-sm font-bold text-center text-red-500">
                  Total quantity cannot be over {matched?.max_quantity}
                </p>
              )}
              {totalQuantity < matched?.min_quantity && (
                <p className="text-sm font-bold text-center text-red-500">
                  Total quantity cannot be below {matched?.min_quantity}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomQuantity;
