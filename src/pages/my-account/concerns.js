import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import { Button } from "@/components/ui/button";
import React from "react";

const ConcernPage = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Concerns Overview">
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
              <Button>Apply Now</Button>
            </div>
          </div>
        </section>
      </AccountLayout>
    </ClientLayout>
  );
};

export default ConcernPage;
