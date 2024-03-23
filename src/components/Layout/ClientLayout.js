import React from "react";
import ClientHeader from "../Header/ClientHeader";

const ClientLayout = ({ children }) => {
  return (
    <section className="flex flex-col w-full min-h-screen bg-quaternary">
      <header className="h-32 ">
        <ClientHeader />
      </header>
      <main className="flex-1 ">{children}</main>
      <footer className="bg-red-700 min-h-40"></footer>
    </section>
  );
};

export default ClientLayout;
