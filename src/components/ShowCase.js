import React from "react";
import Link from "next/link";
import mug from "../../public/assets/mug1.webp";
import { useRouter } from "next/router";
import { truncateHTML } from "@/lib/utils";
import Image from "next/image";

const ShowCase = ({ title, subTitle, data, bg }) => {
  const router = useRouter();
  const { product_category } = router.query;

  return (
    <section className={`${bg ? "bg-secondary" : ""}`}>
      <div className="custom_container text-secondgraphy">
        <div className="max-w-4xl py-3 mx-auto text-center">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            {title}
          </h1>
          <div
            className="mt-2 mb-2 text-sm font-normal md:text-base text-typography md:mb-5"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          ></div>
        </div>
        <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.products.map((item) => {
            return (
              <Link
                href={`/product/${product_category}/${item?.slug}`}
                key={item.id}
              >
                <div className="h-full transition-all duration-150 border shadow-primary full hover:shadow-md">
                  <div className="w-full h-[85%]">
                    <Image
                      className="object-cover w-full h-full"
                      src={`${
                        item?.media?.filter((item) => item.is_profile === 1)[0]
                          ?.url || "/assets/products/placehounder.png"
                      }`}
                      class="card-img-top"
                      alt="img"
                      height={500}
                      width={500}
                    />
                  </div>
                  <div className="flex h-[15%] items-center justify-center">
                    <p className="text-base font-medium text-center text-secondgraphy hover:underline hover:text-primary">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
