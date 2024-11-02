import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import { Button } from "@/components/ui/button";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const CreditApplication = () => {
  return (
    <ClientLayout>
      <MetaData title="Credit Application" />
      <AccountLayout breadcrumb="Credit Application">
        <section>
          <h1 className="text-xl font-bold text-center uppercase text-secondgraphy">
            Pay monthly apllication form
          </h1>
          <div className="p-5 mt-3 text-center bg-secondary text-wrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            quaerat quam velit magnam sequi ratione soluta non officiis deleniti
            nam, eum accusantium saepe facilis quae temporibus magni sapiente
            necessitatibus odit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fugit officiis blanditiis harum quia, autem
            debitis aut eius tempore accusantium repellendus ratione ipsa quod
            veniam? Eveniet nam hic tempore. Maiores, tenetur!
          </div>
          <div className="py-4 text-center">
            <Button>Apply Now</Button>
          </div>
        </section>
      </AccountLayout>
    </ClientLayout>
  );
};

export default CreditApplication;
