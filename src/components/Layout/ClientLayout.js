import React, { useState } from "react";
import ClientHeader from "../Header/ClientHeader";
import ClientFooter from "../Footer/ClientFooter";
import MobileNav from "../Footer/MobileNav";

const ClientLayout = ({ children }) => {
  const [showbasket, setshowbasket] = useState(false);
  const showcards = () => {
    setshowbasket(!showbasket);
  };

  const hideBasket = () => {
    setshowbasket(false);
  };

  return (
    <section className="flex flex-col w-full min-h-screen ">
      <header className="relative z-10 h-auto ">
        <ClientHeader showcards={showcards} hideBasket={hideBasket} />
      </header>
      <main className="flex-1 ">{children}</main>
      <footer className="bg-secondgraphy min-h-40">
        <ClientFooter />
      </footer>
      <MobileNav />
    </section>
  );
};

export default ClientLayout;
