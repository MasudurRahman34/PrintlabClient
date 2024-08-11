import Head from "next/head";
import React from "react";

const MetaData = ({ title, description }) => {
  return (
    <Head>
      <title>weareprintlab {title && `- ${title}`}</title>
      <meta
        name="description"
        content={`${
          description
            ? description
            : "We are a print lab that offers a wide range of printing services. We offer custom printing services for mugs, t-shirts, hoodies, and more."
        }`}
      />
    </Head>
  );
};

export default MetaData;
