import React from "react";
import TopCategoryItem from "./TopCategoryItem";

const TopCaegoryList = ({ itemList = [] }) => {
  return (
    <section className="custom_container">
      {itemList.length ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {itemList.map((category) => (
            <TopCategoryItem key={category.id} category={category.itemable} />
          ))}
        </div>
      ) : (
        <div className="text-center">No data found</div>
      )}
    </section>
  );
};

export default TopCaegoryList;
