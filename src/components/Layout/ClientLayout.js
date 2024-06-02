import React, { useState } from "react";
import ClientHeader from "../Header/ClientHeader";
import ClientFooter from "../Footer/ClientFooter";
import MobileNav from "../Footer/MobileNav";
import Hoverbasket from "@/pages/hoverbasket";

const ClientLayout = ({ children }) => {
  const [showbasket,setshowbasket] = useState(false)
  const showcards = () => {
    setshowbasket(!showbasket);
  };
  return (
    <section className="flex flex-col w-full min-h-screen ">
      <header className="h-auto relative z-10 ">
        <ClientHeader showcards={showcards}  />
        <Hoverbasket show={showbasket} />
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
