import Banner from "@/components/Banner";
import ClientLayout from "@/components/Layout/ClientLayout";
import CategoryPage from "@/components/pages/CategoryPage/CategoryPage";
import React from "react";

const index = () => {
  return (
    <ClientLayout>
      <Banner
        title="Mug Printing"
        text="Our Custom printed mug range is ideal for so many occasions. Offer them at events or get them printed for your staff to showcase your brand! How about using them to showcase your unique designs. Check out our range now. "
      />
      <CategoryPage />
    </ClientLayout>
  );
};

export default index;
