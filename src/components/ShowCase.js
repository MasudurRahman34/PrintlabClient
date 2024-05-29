import React from "react";
import Link from "next/link";
import mug from "../../public/assets/mug1.webp";
import { useRouter } from "next/router";

const ShowCase = ({ title, subTitle, data, bg, isPending }) => {
  const router = useRouter();
  const { product_category } = router.query;
  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={`${bg ? "bg-secondary" : ""}`}>
      <div className="custom_container text-secondgraphy">
        <div className="max-w-4xl py-3 mx-auto text-center">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="mt-2 mb-2 text-sm font-normal md:text-base text-typography md:mb-5">
            {subTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.products.map((item) => (
            <Link
              href={`/${product_category}/${item?.slug}`}
              key={item?.id}
              className="flex flex-col transition-all duration-300 bg-white hover:shadow-primary hover:shadow-md"
            >
              <div className="w-full mb-1">
                <img
                  src={"https://i.ibb.co/YhCxD9N/mug1.webp"}
                  alt={item?.title}
                  className="object-cover w-full h-72"
                />
              </div>
              <div className="w-full h-auto p-3 overflow-hidden text-center rounded-md">
                <h2 className="text-xl font-semibold text-secondgraphy">
                  {item?.title}
                </h2>
                <p className="mt-2 text-[14px] md:text-base font-normal text-typography ">
                  {item?.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
