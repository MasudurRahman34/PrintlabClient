import React, { useState } from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesQuery } from "@/resolvers/query";
import Loader from "../Loader/Loader";

const BottomHeader = () => {
  const [isActive, setIsActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState({
    id: null,
    menu: null,
  });

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const showSubMenu = ({ manuCategory }) => {
    setActiveMenu({
      id: manuCategory.id,
      menu: manuCategory,
    });
  };

  const goBackMenu = () => {
    setActiveMenu({
      id: null,
      menu: null,
    });
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categories-get"],
    queryFn: getCategoriesQuery,
  });

  return (
    <section className="flex items-start justify-between gap-5 px-5 border-b border-gray-300 bg-primary header">
      {isPending || isError ? null : (
        <div className="w-full">
          <div className="row v-center">
            {/* <!-- menu start here --> */}
            <div className="header-item item-center">
              <div
                className={`menu-overlay ${isActive ? "active" : ""}`}
                onClick={toggleMenu}
              ></div>
              <nav className={`menu ${isActive ? "active" : ""}`}>
                {isPending ? (
                  <Loader />
                ) : isError ? (
                  "Error"
                ) : (
                  <div
                    className={`mobile-menu-head ${
                      activeMenu.id ? "active" : ""
                    }`}
                  >
                    <div className="go-back" onClick={goBackMenu}>
                      {"<"}
                    </div>
                    <div className="current-menu-title">
                      {activeMenu.menu ? activeMenu.menu.name : ""}
                    </div>
                    <div className="mobile-menu-close" onClick={toggleMenu}>
                      &times;
                    </div>
                  </div>
                )}
                <ul className="menu-main">
                  {data?.data.map((manuCategory) => {
                    return (
                      <>
                        <li
                          className={`${
                            manuCategory.children.length > 0
                              ? "menu-item-has-children"
                              : ""
                          }`}
                        >
                          <Link
                            href="#"
                            onClick={() => {
                              showSubMenu({ manuCategory });
                            }}
                          >
                            {manuCategory.title}{" "}
                            <i className="fa fa-angle-down"></i>
                          </Link>
                          <div
                            className={`sub-menu mega-menu mega-menu-column-4 ${
                              activeMenu.id && activeMenu.id === manuCategory.id
                                ? "active"
                                : ""
                            }`}
                          >
                            {manuCategory.children.length > 0 &&
                              manuCategory.children.map((child, index) => {
                                return (
                                  <div className="list-item" key={index}>
                                    <h4 className="title text-sm md:text-base ">
                                      <Link href={`/${child.slug}`}>
                                        {child.title}
                                      </Link>
                                    </h4>
                                    <ul>
                                      {child.products.length > 0 &&
                                        child.products.map((product, index) => {
                                          return (
                                            <li key={index} className="text-red-500">
                                              <Link
                                                href={`/${child.slug}/${product.slug}`}
                                              >
                                                {product.title}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                );
                              })}
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* 	<!-- menu end here --> */}
            <div className="justify-between header-item item-right">
              {/* 	<!-- mobile menu trigger --> */}
              <div
                className="mobile-menu-trigger"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <span></span>
              </div>

              <div className="flex items-center justify-center lg:hidden">
                <div>
                  <Link href="contact-us">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 group-hover:text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="contact-us">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 group-hover:text-primary"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BottomHeader;
