import React from "react";

export const Thumb = (props) => {
  const { selected, index, onClick, src } = props;

  return (
    <div
      className={"embla_single_product-thumbs__slide".concat(
        selected ? " embla_single_product-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla_single_product-thumbs__slide__number"
      >
        <img src={src} alt="" />
      </button>
    </div>
  );
};
