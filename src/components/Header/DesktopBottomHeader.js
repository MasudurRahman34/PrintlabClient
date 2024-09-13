import Link from "next/link";
import React from "react";

import { RiArrowDownSLine } from "react-icons/ri";

const DesktopBottomHeader = ({ categories = [] }) => {
  return (
    <section className="items-center justify-center hidden w-full h-full bg-primary lg:flex">
      <nav className="flex items-center justify-center w-full h-full">
        <ul className="flex max-w-[calc(100vw-2rem)] items-center justify-center w-full h-full gap-3 ">
          {categories.map((category) => {
            return (
              <li key={category.id} className=" group">
                <div className="flex items-center justify-start max-w-44">
                  <span className="h-full gap-2 px-2 py-3 text-sm font-semibold cursor-pointer text-secondgraphy">
                    {category.title}{" "}
                  </span>
                  {category.children.length > 0 && (
                    <div>
                      <RiArrowDownSLine className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {category.children.length > 0 && (
                  <div className="absolute left-0 z-50 hidden w-full mx-auto group-hover:block top-full ">
                    <ul className="p-4 h-full max-w-[calc(100vw-2rem)] min-h-52 gap-8 flex items-stretch justify-start  shadow-lg bg-white rounded-b-lg flex-wrap   text-secondgraphy mx-auto">
                      {category.children.map((child) => {
                        return (
                          <li key={child.id} className="text-sm group">
                            <Link
                              href={`/product/${child.slug}`}
                              className="text-sm font-semibold "
                            >
                              {child.title}
                            </Link>
                            <ul className="flex flex-col gap-1 mt-4">
                              {child.products.length > 0 &&
                                child.products.map((product) => {
                                  return (
                                    <Link
                                      href={`/product/${child.slug}/${product.slug}`}
                                      key={product.id}
                                      className="text-secondgraphy hover:text-secondgraphy"
                                    >
                                      {product.title}
                                    </Link>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default DesktopBottomHeader;
