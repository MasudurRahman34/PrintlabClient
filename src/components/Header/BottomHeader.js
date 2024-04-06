import React, { useState } from "react";

const menuCategories = [
  {
    id: 1,
    name: "Large format Printing",
    slug: "Large-format-Printing",
    description: "lorem",
    meta_title: "lorem",
    meta_description: "lorem",
    meta_keywords: "lorem",
    status: "1",
    offer_id: null,
    category_id: null,
    created_by: 0,
    modified_by: 0,
    created_at: null,
    updated_at: null,
    deleted_at: null,
    children: [
      {
        id: 2,
        name: "a-board",
        slug: "a-board",
        description: "lorem Lorem Lorem ",
        meta_title: "a-board",
        meta_description: "lorem Lorem Lorem ",
        meta_keywords: "lorem Lorem Lorem ",
        status: "1",
        offer_id: null,
        category_id: 1,
        created_by: 0,
        modified_by: 0,
        created_at: null,
        updated_at: null,
        deleted_at: null,
        children: [
          {
            id: 3,
            name: "A-frames",
            slug: "a-frames",
            description: "lorem",
            meta_title: "lorem",
            meta_description: "lorem",
            meta_keywords: "lorem",
            status: "1",
            offer_id: null,
            category_id: 2,
            created_by: 0,
            modified_by: 0,
            created_at: null,
            updated_at: null,
            deleted_at: null,
            children: [],
          },
        ],
      },
      {
        id: 5,
        name: "a-board",
        slug: "a-board",
        description: "lorem Lorem Lorem ",
        meta_title: "a-board",
        meta_description: "lorem Lorem Lorem ",
        meta_keywords: "lorem Lorem Lorem ",
        status: "1",
        offer_id: null,
        category_id: 1,
        created_by: 0,
        modified_by: 0,
        created_at: null,
        updated_at: null,
        deleted_at: null,
        children: [
          {
            id: 3,
            name: "A-frames",
            slug: "a-frames",
            description: "lorem",
            meta_title: "lorem",
            meta_description: "lorem",
            meta_keywords: "lorem",
            status: "1",
            offer_id: null,
            category_id: 2,
            created_by: 0,
            modified_by: 0,
            created_at: null,
            updated_at: null,
            deleted_at: null,
            children: [],
          },
        ],
      },
    ],
  },
];

const BottomHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);

  const showSubMenu = (hasChildren) => {
    const subMenuElement = hasChildren.querySelector(".sub-menu");
    setSubMenu(subMenuElement);
    subMenuElement.classList.add("active");
    subMenuElement.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle =
      hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
  };

  const hideSubMenu = () => {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  };

  return (
    <section className="flex items-center justify-between h-20 gap-10 px-5 border-b border-gray-300 bg-primary header">
      <div classNameName="w-full">
        <div className="row v-center">
          {/* <!-- menu start here --> */}
          <div className="header-item item-center">
            <div
              className={`menu-overlay ${isActive ? "active" : ""}`}
              onClick={toggleMenu}
            ></div>
            <nav className={`menu ${isActive ? "active" : ""}`}>
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="menu-main">
                {menuCategories.map((manuCategory) => {
                  return (
                    <>
                      <li className="menu-item-has-children">
                        <a href="#">
                          {manuCategory.name}{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                        {manuCategory.children.length > 0 &&
                          manuCategory.children.map((child, index) => {
                            return (
                              <div
                                className="sub-menu mega-menu mega-menu-column-4"
                                key={index}
                              >
                                <div className="list-item">
                                  <h4 className="title">{child.name}</h4>
                                  <ul>
                                    {child.children.length > 0 &&
                                      child.children.map((subChild, index) => {
                                        return (
                                          <li key={index}>
                                            <a href="#">{subChild.name}</a>
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </div>
                              </div>
                            );
                          })}
                      </li>
                    </>
                  );
                })}
              </ul>
            </nav>
          </div>
          {/* 	<!-- menu end here --> */}
          <div className="header-item item-right">
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
            <a href="#">
              <i className="far fa-heart"></i>
            </a>
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            {/* 	<!-- mobile menu trigger --> */}
            <div
              className="mobile-menu-trigger"
              onClick={() => {
                toggleMenu();
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
