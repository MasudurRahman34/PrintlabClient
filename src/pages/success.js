import ClientLayout from "@/components/Layout/ClientLayout";

import withAuth from "@/hoc/withAuth";
import Link from "next/link";

import React from "react";

const SuccessPage = () => {
  return (
    <ClientLayout>
      <div className="custom_container">
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-6">
          <p className="text-center">
            <span className="font-semibold">Your order is under process.</span>{" "}
            <br /> You will receive an email with the order details shortly.
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="px-10 py-4 text-white rounded-md bg-secondgraphy"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default withAuth(SuccessPage);
