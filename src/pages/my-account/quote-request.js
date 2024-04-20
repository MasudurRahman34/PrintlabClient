import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import { Button } from "@/components/ui/button";
import React from "react";

const QuoteRequest = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Quote Request">
        {" "}
        <section>
          <div className="p-5 mt-3 text-center bg-secondary text-wrap">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              quaerat quam velit magnam sequi ratione soluta non officiis
              deleniti nam, eum accusantium saepe facilis quae temporibus magni
              sapiente necessitatibus odit. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Fugit officiis blanditiis harum
              quia, autem debitis aut eius tempore accusantium repellendus
              ratione ipsa quod veniam? Eveniet nam hic tempore. Maiores,
              tenetur!
            </p>
            <div className="py-4 text-center">
              <Button>Raise A Bespoke Quote</Button>
            </div>
          </div>
          <div className="w-full px-3 py-2 my-5 text-sm border-2 rounded-md shadow-md shadow-yellow-200 border-primary bg-primary-light text-secondgraphy">
            <p>
              We aim to respond to all bespoke quotes within 24hrs. If we
              require any further information to help fulfil your request, we
              will contact you.
            </p>
          </div>
        </section>
      </AccountLayout>
    </ClientLayout>
  );
};

export default QuoteRequest;
