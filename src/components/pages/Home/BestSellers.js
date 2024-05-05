import React from "react";




const BestSellers = () => {
  const filterBy = [
    {
      id: 1,
      name: "Populer Products",
    },
    {
      id: 2,
      name: "Larger Format",
    },
    {
      id: 3,
      name: "Business Cards",
    },
    {
      id: 4,
      name: "Booklet/Brochres",
    },
    {
      id: 5,
      name: "Packaging",
    },
    {
      id: 6,
      name: "Design online",
    },
  ];
  return    <nav
  className="-mb-0.5 flex justify-center space-x-6 rtl:space-x-reverse overflow-x-auto"
  aria-label="Tabs"
>
  {filterBy.map((filter, index) => (
    <button
      type="button"
      key={index}
      className={` hover:text-primary  font-semibold text-base hover:underline border-b-2   py-4 px-1 inline-flex items-center gap-2    whitespace-nowrap text-defaulttextcolor   active ${
        activeTab === filter.id
          ? "underline text-primary border-primary"
          : ""
      }`}
      id="horizontal-alignment-item-1"
      data-hs-tab="#horizontal-alignment-1"
      aria-controls="horizontal-alignment-1"
    >
      {filter.name}
    </button>
  ))}
</nav>
};

export default BestSellers;
