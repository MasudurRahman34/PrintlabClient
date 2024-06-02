import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const ClientHeader = ({ showcards, hideBasket }) => {
  return (
    <header>
      <TopHeader showcards={showcards} hideBasket={hideBasket} />
      <BottomHeader />
    </header>
  );
};

export default ClientHeader;
