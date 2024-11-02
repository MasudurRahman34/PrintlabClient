import { getMediaThumbURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopCategoryItem = ({ category }) => {
  return (
    <Link
      href={`/product/${category.slug}`}
      className="relative w-full overflow-hidden transition-all duration-500 ease-in-out rounded-lg group hover:shadow-md "
    >
      <Image
        layout="responsive"
        width={100}
        height={100}
        className="object-cover object-center w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
        src={getMediaThumbURL(category.media)}
        alt="busness"
      />

      <div className="absolute bottom-0 flex items-center justify-center w-full h-10 text-center text-white bg-black/60">
        {/*     <p className="text-[14px] uppercase text-[#8BBA72] pt-2 pb-1">
          {category.title}
        </p> */}
        <h6 className="w-full mx-auto text-sm font-bold text-center ">
          {category.title}
        </h6>
      </div>
    </Link>
  );
};

export default TopCategoryItem;
