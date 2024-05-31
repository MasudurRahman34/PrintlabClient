import React, { useState } from "react";
import EmblaCarousel from "@/components/pages/SingleProduct/EmblaCarousel";
import SinglePageAccordion from "@/components/pages/SingleProduct/Accordion";
import Commitment from "@/components/Commitment";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSingleProductQuery } from "@/resolvers/query";
import Combination from "./Combination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import detaisimg  from "./assete/products/placehounder.png";
import detaislmg from "../../../../public/assets/products/placehounder.png"


const OPTIONS = {
  axis: "y",
};

const SingleProductPageComponent = () => {
  const router = useRouter();
  const { single_product, product_category } = router.query;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`product-${single_product}`, single_product],
    queryFn: () =>
      getSingleProductQuery({
        slug: single_product,
        category_slug: product_category,
      }),
    enabled: !!single_product,
  });

  return (
    <>
      <div className="flex flex-col items-start justify-between gap-5 lg:flex-row ">
        <div className="max-w-xl p-4 lg:border-r-2 border-secondgraphy">
          <div>
            <EmblaCarousel slides={data?.data?.media} options={OPTIONS} isLoading={isLoading}  />
          </div>
          <div>
            {data?.data.description && (
              <div
                dangerouslySetInnerHTML={{ __html: data?.data.description }}
              />
            )}
          </div>
          <div>
            <SinglePageAccordion data={data?.data} isLoading={isLoading} />
          </div>
        </div>
        <Combination data={data} />
      </div>
      <div>
        <Commitment />
      </div>
      <div>
        <div className="mt-10">
          <div class="box-body">
          </div>
          {
            data?.data?.specification &&     
            <Tabs defaultValue="Product Details" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  bg-primary !text-base !font-bold ">
              {data?.data?.specification?.details_imageUrl &&
                data?.data?.specification?.details && (
                  <TabsTrigger value="Product Details" className=" text-sm !md:text-base !font-bold text-secondgraphy -mt-[3px] p-[6px] -ml-1 !rounded-r-none">
                    Product Details
                  </TabsTrigger>
                )}
              {data?.data?.specification?.technical_specification_imageUrl &&
                data?.data?.specification?.technical_specification && (
                  <TabsTrigger value="technical_specification" className=" text-sm !md:text-base !font-bold text-secondgraphy -mt-[3px] p-[6px] -mr-1 !rounded-l-none">
                    Technical_specification
                  </TabsTrigger>
                )}
            </TabsList>
            {data?.data?.specification?.details_imageUrl &&
              data?.data?.specification?.details && (
                <TabsContent value="Product Details">
                  <div id="pills-on-gray-color-1" role="tabpanel">
                    <div className="md:flex">
                      <div className="hidden md:block md:w-3/12">
                        <div className="w-full h-full p-5">
                          <img
                            src={data?.data?.specification?.details_imageUrl }
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-9/12">
                        <div className="p-5">
                          <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                            {data?.data?.specification?.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
            {data?.data?.specification?.technical_specification_imageUrl &&
              data?.data?.specification?.technical_specification && (
                <TabsContent value="technical_specification">
                  <div id="pills-on-gray-color-1" role="tabpanel">
                    <div className="md:flex">
                      <div className="hidden md:block md:w-3/12">
                        <div className="w-full h-full p-5">
                          <img
                            src={
                              data?.data?.specification
                                ?.technical_specification_imageUrl 
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-9/12">
                        <div className="p-5">
                          <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                            {data?.data?.specification?.technical_specification}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
          </Tabs>
          }
      
        </div>
      </div>
    </>
  );
};

export default SingleProductPageComponent;
