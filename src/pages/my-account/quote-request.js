import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import { Button } from "@/components/ui/button";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const QuoteRequest = () => {
  return (
    <ClientLayout>
      <MetaData title="Quote Request" />
      <AccountLayout breadcrumb="Quote Request">
        {" "}
        <section>
          <div className="p-5 mt-3 text-center bg-secondary text-wrap">
            <p>
              Can&apos;t find exactly what you&apos;re looking for on our
              website? Fill in our “bespoke quotes” form with the exact details
              you&apos;re looking for and our team will create you a custom
              quote for that bespoke request.
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
