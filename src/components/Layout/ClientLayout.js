import React from "react";
import ClientHeader from "../Header/ClientHeader";

const ClientLayout = ({ children }) => {
  return (
    <section className="flex flex-col w-full min-h-screen bg-gray-50">
      <header className="h-auto ">
        <ClientHeader />
      </header>
      <main className="flex-1 ">{children}</main>
      <footer className="bg-red-700 min-h-40"></footer>
    </section>
  );
};

export default ClientLayout;
