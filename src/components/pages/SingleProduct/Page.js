import React, { useMemo, useState } from "react";

import SinglePageAccordion from "@/components/pages/SingleProduct/Accordion";
import Commitment from "@/components/Commitment";
import ImageGallery from "react-image-gallery";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSingleProductQuery } from "@/resolvers/query";
import Combination from "./Combination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetaData from "@/components/ui/MetaData";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
// import detaisimg  from "./assete/products/placehounder.png";

const SingleProductPageComponent = ({ total_refetch, cart_items }) => {
  const router = useRouter();
  const { single_product, product_category } = router.query;

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: [`product-${single_product}`, single_product],
    queryFn: () =>
      getSingleProductQuery({
        slug: single_product,
        category_slug: product_category,
      }),
    enabled: !!single_product,
  });

  const media = useMemo(() => {
    if (data?.data?.media?.length > 0) {
      return data.data.media.map((item) => {
        return {
          original: item.url,

          thumbnail: item.url,
        };
      });
    } else {
      return [
        {
          original: "https://i.ibb.co/9hF3Vbb/placehounder.png",
          thumbnail: "https://i.ibb.co/9hF3Vbb/placehounder.png",
        },
      ];
    }
  }, [data?.data]);

  if (isLoading) {
    return (
      <div className="mx-auto custom_container">
        <div className="flex items-center justify-center w-full min-h-96 ">
          <Loader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <MetaData
        title={data?.data?.meta_title}
        description={data?.data?.meta_description}
      />
      <section className="w-full py-10 custom_container ">
        {isSuccess && (
          <div>
            <div className="grid items-start justify-between grid-cols-12 gap-5 lg:flex-row ">
              <div className="col-span-12 lg:pr-4 md:mb-4 lg:col-span-5 lg:border-r-2 border-secondgraphy">
                <ImageGallery
                  items={media}
                  autoPlay={false}
                  thumbnailPosition="right"
                  disableKeyDown={true}
                  showPlayButton={false}
                />

                <div className="mt-5">
                  {data?.data.description && (
                    <div
                      className="text-sm md:text-base textEditorContent"
                      dangerouslySetInnerHTML={{
                        __html: data?.data.description,
                      }}
                    />
                  )}
                </div>
                <div>
                  <SinglePageAccordion
                    data={data?.data}
                    isLoading={isLoading}
                  />
                </div>
              </div>
              <Combination
                data={data}
                isProductLoading={isLoading}
                total_refetch={total_refetch}
                cart_items={cart_items}
              />
            </div>
            <div>
              <Commitment />
            </div>
            <div>
              <div className="mt-10">
                <div className="box-body"></div>
                {data?.data?.specification && (
                  <Tabs defaultValue="Product Details" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  bg-primary !text-base !font-bold ">
                      {data?.data?.specification?.details_imageUrl &&
                        data?.data?.specification?.details && (
                          <TabsTrigger
                            value="Product Details"
                            className=" text-xs md:text-base font-bold text-secondgraphy -mt-[3px] p-[6px] -ml-1 !rounded-r-none"
                          >
                            Product Details
                          </TabsTrigger>
                        )}
                      {data?.data?.specification
                        ?.technical_specification_imageUrl &&
                        data?.data?.specification?.technical_specification && (
                          <TabsTrigger
                            value="technical_specification"
                            className=" text-xs md:text-base font-bold text-secondgraphy -mt-[3px] p-[6px] -mr-1 !rounded-l-none"
                          >
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
                                  <Image
                                    src={
                                      data?.data?.specification
                                        ?.details_imageUrl
                                    }
                                    alt="details"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-9/12">
                                <div className="p-5">
                                  <div
                                    className="text-sm textEditorContent md:text-base"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        data?.data?.specification?.details,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      )}
                    {data?.data?.specification
                      ?.technical_specification_imageUrl &&
                      data?.data?.specification?.technical_specification && (
                        <TabsContent value="technical_specification">
                          <div id="pills-on-gray-color-1" role="tabpanel">
                            <div className="md:flex">
                              <div className="hidden md:block md:w-3/12">
                                <div className="w-full h-full p-5">
                                  <Image
                                    src={
                                      data?.data?.specification
                                        ?.technical_specification_imageUrl
                                    }
                                    alt="details"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-9/12">
                                <div className="p-5">
                                  <div
                                    className="text-sm textEditorContent md:text-base"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        data?.data?.specification
                                          ?.technical_specification,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      )}
                  </Tabs>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SingleProductPageComponent;
