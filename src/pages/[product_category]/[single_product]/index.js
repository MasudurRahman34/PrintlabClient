import Banner from "@/components/Banner";
import ClientLayout from "@/components/Layout/ClientLayout";
import ShowCase from "@/components/ShowCase";
import React from "react";

const index = () => {
  return (
    <ClientLayout>
      <Banner
        title="Mug Printing"
        text="Our Custom printed mug range is ideal for so many occasions. Offer them at events or get them printed for your staff to showcase your brand! How about using them to showcase your unique designs. Check out our range now. "
      />
      <ShowCase
        title="Printed Mugs"
        subTitle="Come and check out our range of Travel Drinkware. A variety of choice awaits, create your own design fast with our online designer. Order yours now and boost your promotional products or create fabulous gifts! "
      />
      <ShowCase
        title="Printed Travel Mugs"
        subTitle="Check out our range of Personalised Printed Ceramic Mugs. With a range of colours of colours to choose from you wont struggle find one to boost your brand or create stunning gifts."
      />
      <ShowCase
        title="Sports Bottle Printing"
        subTitle="Sports bottles make the perfect high end branded giveaway or promotional item. Check out our range below now and choose the one right for you! "
      />
    </ClientLayout>
  );
};

export default index;
