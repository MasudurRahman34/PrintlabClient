import React from "react";
import ClientHeader from "../Header/ClientHeader";
import ClientFooter from "../Footer/ClientFooter";

const ClientLayout = ({ children }) => {
  return (
    <section className="flex flex-col w-full min-h-screen ">
      <header className="h-auto ">
        <ClientHeader />
      </header>
      <main className="flex-1 ">{children}</main>
      <footer className="bg-secondgraphy min-h-40">
        <ClientFooter />
      </footer>
    </section>
  );
};

export default ClientLayout;
