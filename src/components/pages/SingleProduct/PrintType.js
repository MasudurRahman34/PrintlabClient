import Loader from "@/components/Loader/Loader";
import { getArtworkServicesQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const ArtworkCard = ({
  item,
  selectedPrintType,
  setSelectedPrintType,
  obj,
}) => {
  return (
    <div
      className={`relative mt-14 text-typography hover:bg-primary-light hover:border-primary w-full  max-w-[10.5rem] min-w-[10rem] min-h-[150px] border rounded-sm p-3 ${
        selectedPrintType[obj]?.id === item.id
          ? "border-primary"
          : "border-gray-200"
      }`}
      onClick={() => {
        if (obj === "parent") {
          setSelectedPrintType({
            parent: item,
            children: item?.children[0] || null,
          });
        } else {
          setSelectedPrintType({
            ...selectedPrintType,
            children: item,
          });
        }
      }}
    >
      <div className="absolute top-[-12%] left-[50%] translate-x-[-50%] flex items-center justify-center rounded-full w-14 h-14 bg-secondgraphy">
        <img
          src="https://www.tradeprint.co.uk/.resources/tradeprint/webresources/images/icons/upload-artwork-icon.svg"
          alt="illustration"
        />
      </div>
      <p className="pt-8 text-center">
        <strong className="font-bold ">{item.title}</strong>
      </p>
      <p className="text-center">{item.cost <= 0 ? "Free" : `£${item.cost}`}</p>
      <p className="text-sm text-center">{item.description}</p>
    </div>
  );
};

const PrintType = ({ selectedPrintType, setSelectedPrintType }) => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["all_attribute_services"],
    queryFn: getArtworkServicesQuery,
  });

  useEffect(() => {
    if (data?.data.length > 0) {
      setSelectedPrintType({
        parent: data.data[0],
        children: data?.data[0]?.children[0] || null,
      });
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="my-5 border-t ">
      <div className="flex flex-wrap items-stretch gap-3 ">
        {!isLoading &&
          !isError &&
          data?.data.length > 0 &&
          data?.data.map((item, index) => (
            <ArtworkCard
              item={item}
              key={index}
              obj="parent"
              selectedPrintType={selectedPrintType}
              setSelectedPrintType={setSelectedPrintType}
            />
          ))}
      </div>
      {selectedPrintType && selectedPrintType?.parent?.children.length > 0 && (
        <div className="flex flex-wrap items-stretch gap-3 ">
          {selectedPrintType?.parent?.children.map((item, index) => (
            <ArtworkCard
              item={item}
              key={index}
              obj="children"
              selectedPrintType={selectedPrintType}
              setSelectedPrintType={setSelectedPrintType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrintType;
