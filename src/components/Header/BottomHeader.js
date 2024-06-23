import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesQuery } from "@/resolvers/query";
import Loader from "../Loader/Loader";
import { BsFillBasketFill } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";

const BottomHeader = ({ showcards, hideBasket, refetch, total }) => {
  const [cart, setCart] = useState({
    totalPrice: 0,
    totalQuantity: 0,
  });

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

  useEffect(() => {
    if (total) {
      const totalPrice =
        total.length > 0
          ? total?.map((item) => item.total).reduce((a, b) => a + b, 0)
          : 0;

      const totalQuantity = total?.length;

      setCart({ totalPrice, totalQuantity });
    }
  }, [total]);

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
                  {data?.data.map((manuCategory, idx) => {
                    return (
                      <>
                        <li
                          className={`${
                            manuCategory.children.length > 0
                              ? "menu-item-has-children"
                              : ""
                          }`}
                          key={idx}
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
                                    <h4 className="text-sm title md:text-base ">
                                      <Link href={`/${child.slug}`}>
                                        {child.title}
                                      </Link>
                                    </h4>
                                    <ul>
                                      {child.products.length > 0 &&
                                        child.products.map((product, index) => {
                                          return (
                                            <li
                                              key={index}
                                              className="text-red-500"
                                            >
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

              <div className="flex items-center justify-center gap-3 lg:hidden">
                <div className="relative flex items-center ">
                  <Link
                    href="/my-account"
                    className="flex flex-col items-center group"
                  >
                    <MdOutlineManageAccounts className="w-6 h-6 text-secondgraphy" />
                  </Link>
                </div>

                <div className="relative">
                  {cart.totalQuantity > 0 && (
                    <div className="absolute flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-red-500 rounded-full -top-2 -right-2 ">
                      {cart.totalQuantity}
                    </div>
                  )}

                  <Link
                    href={"/basket"}
                    onClick={showcards}
                    className="flex flex-col items-center group"
                  >
                    <BsFillBasketFill className="w-6 h-6 text-secondgraphy" />
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
