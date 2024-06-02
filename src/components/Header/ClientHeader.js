import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const ClientHeader = ({ showcards, hideBasket, total }) => {
  return (
    <header>
      <TopHeader showcards={showcards} hideBasket={hideBasket} total={total} />
      <BottomHeader />
    </header>
  );
};

export default ClientHeader;
