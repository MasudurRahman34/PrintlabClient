import React from "react";

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
    ],
  },
];

const BottomHeader = () => {
  return (
    <section class="flex items-center justify-between h-20 gap-10 px-5 border-b bg-primary border-gray-300 header">
      <div className="w-full">
        <div class="row v-center">
          {/* <!-- menu start here --> */}
          <div class="header-item item-center">
            <div class="menu-overlay"></div>
            <nav class="menu">
              <div class="mobile-menu-head">
                <div class="go-back">
                  <i class="fa fa-angle-left"></i>
                </div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="menu-main">
                {menuCategories.map((manuCategory) => {
                  return (
                    <>
                      <li class="menu-item-has-children">
                        <a href="#">
                          {manuCategory.name} <i class="fa fa-angle-down"></i>
                        </a>
                        <div class="sub-menu mega-menu mega-menu-column-4">
                          {manuCategory.children.map((child) => {
                            return (
                              <>
                                <div class="list-item text-center">
                                  <a href="#">
                                    <img src="img/p1.jpg" alt="new Product" />
                                    <h4 class="title">{child.name}</h4>
                                  </a>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </li>
                    </>
                  );
                })}

                <li>
                  <a href="#">Home</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    New <i class="fa fa-angle-down"></i>
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p1.jpg" alt="new Product" />
                        <h4 class="title">Product 1</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p2.jpg" alt="new Product" />
                        <h4 class="title">Product 2</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p3.jpg" alt="new Product" />
                        <h4 class="title">Product 3</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p4.jpg" alt="new Product" />
                        <h4 class="title">Product 4</h4>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    Shop <i class="fa fa-angle-down"></i>
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <h4 class="title">Men's Fashion</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                      <h4 class="title">Beauty</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <h4 class="title">Women's Fashion</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                      <h4 class="title">Furniture</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <h4 class="title">Home, Kitchen</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <img src="img/shop1.jpg" alt="shop" />
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    Blog <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <a href="#">Standard Layout</a>
                      </li>
                      <li>
                        <a href="#">Grid Layout</a>
                      </li>
                      <li>
                        <a href="#">single Post Layout</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    Pages <i class="fas fa-angle-down"></i>
                  </a>
                  <div class="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Register</a>
                      </li>
                      <li>
                        <a href="#">Faq</a>
                      </li>
                      <li>
                        <a href="#">404 Page</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* 	<!-- menu end here --> */}
          <div class="header-item item-right">
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
            <a href="#">
              <i class="far fa-heart"></i>
            </a>
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
            {/* 	<!-- mobile menu trigger --> */}
            <div class="mobile-menu-trigger">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
