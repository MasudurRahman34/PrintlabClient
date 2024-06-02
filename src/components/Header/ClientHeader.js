import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const ClientHeader = ({showcards}) => {
  return (
    <header>
      <TopHeader showcards={showcards} />
      <BottomHeader />
    </header>
  );
};

export default ClientHeader;
