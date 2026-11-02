import React from "react";

const MetaData = ({
  title,
  description = "We are a print lab that offers a wide range of printing services. We offer custom printing services for mugs, t-shirts, hoodies, and more.",
  keywords = "print lab, custom printing, printing services",
}) => {
  return (
    <>
      <title>{`weareprintlab ${title ? `- ${title}` : ""}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default MetaData;
