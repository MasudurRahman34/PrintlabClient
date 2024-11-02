import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesQuery } from "@/resolvers/query";
import Loader from "../Loader/Loader";
import { BsFillBasketFill } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useAuth } from "@/hooks/useAuth";
import { FiLogIn } from "react-icons/fi";
import DesktopBottomHeader from "./DesktopBottomHeader";
import { IoLogOut } from "react-icons/io5";
import { FaChevronDown, FaChevronRight, FaUser } from "react-icons/fa";

const BottomHeader = ({ showcards, hideBasket, refetch, total }) => {
  const { user, isAuthenticated, isLoading: auth_loading, logout } = useAuth();
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories-get"],
    queryFn: getCategoriesQuery,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return (
    <>
      {isLoading || isError ? null : (
        <>
          <section className="flex items-center justify-between gap-5 px-4 border-b border-gray-300 lg:px-5 bg-primary header lg:hidden">
            <div className="w-full ">
              <div className="row v-center">
                {/* <!-- menu start here --> */}
                <div className="header-item item-center">
                  <div
                    className={`menu-overlay ${isActive ? "active" : ""}`}
                    onClick={toggleMenu}
                  ></div>
                  <nav className={`menu ${isActive ? "active" : ""}`}>
                    {isLoading ? (
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
                          <li
                            className={`${
                              manuCategory.children.length > 0
                                ? "menu-item-has-children"
                                : ""
                            }`}
                            key={idx}
                          >
                            <div
                              className="flex items-center justify-between w-full px-4 py-3 text-sm border-b border-gray-300 title md:text-base"
                              onClick={() => {
                                showSubMenu({ manuCategory });
                              }}
                            >
                              <span>{manuCategory.title}</span>{" "}
                              {manuCategory.children.length > 0 && (
                                <FaChevronRight className="cursor-pointer" />
                              )}
                            </div>
                            <div
                              className={`sub-menu mega-menu mega-menu-column-4 ${
                                activeMenu.id &&
                                activeMenu.id === manuCategory.id
                                  ? "active"
                                  : ""
                              }`}
                            >
                              {manuCategory.children.length > 0 &&
                                manuCategory.children.map((child, index) => {
                                  return (
                                    <div className="list-item" key={index}>
                                      <h4 className="text-sm title md:text-base ">
                                        <Link href={`/product/${child.slug}`}>
                                          {child.title}
                                        </Link>
                                      </h4>
                                      <ul>
                                        {child.products.length > 0 &&
                                          child.products.map(
                                            (product, index) => {
                                              return (
                                                <li
                                                  key={index}
                                                  className="text-red-500"
                                                >
                                                  <Link
                                                    href={`/product/${child.slug}/${product.slug}`}
                                                  >
                                                    {product.title}
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                      </ul>
                                    </div>
                                  );
                                })}
                            </div>
                          </li>
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
                    {!auth_loading && isAuthenticated ? (
                      <>
                        <div className="flex flex-col items-center ">
                          <Link
                            href="/my-account"
                            className="flex flex-col items-center group"
                          >
                            <MdOutlineManageAccounts className="w-6 h-6 text-secondgraphy" />
                          </Link>
                        </div>
                        <div className="flex flex-col items-center">
                          <button
                            className="mt-5 mb-5 "
                            onClick={() => {
                              logout();
                            }}
                          >
                            <IoLogOut className="w-6 h-6 text-secondgraphy" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center ">
                        <Link href="/login" className="flex items-center group">
                          <FaUser className="w-5 h-5 text-secondgraphy" />
                        </Link>
                      </div>
                    )}

                    {cart?.totalQuantity > 0 ? (
                      <div className="flex items-center justify-start gap-2 mr-1 rounded-md text-white bg-secondgraphy py-1.5 px-3">
                        <Link
                          href={"/basket"}
                          onClick={showcards}
                          className="flex items-center justify-start group"
                        >
                          <BsFillBasketFill className="w-5 h-5 text-white text-secondgraphy" />
                        </Link>
                        <div className="flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full md:w-6 md:h-6 Md:text-sm">
                          {cart.totalQuantity}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center mr-3 ">
                        <Link
                          href={"/basket"}
                          onClick={showcards}
                          className="flex items-center group"
                        >
                          <BsFillBasketFill className="w-5 h-5 text-secondgraphy" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <DesktopBottomHeader categories={data?.data} />
        </>
      )}
    </>
  );
};

export default memo(BottomHeader);
