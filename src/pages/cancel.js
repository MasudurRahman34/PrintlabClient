import ClientLayout from "@/components/Layout/ClientLayout";
import MetaData from "@/components/ui/MetaData";

import withAuth from "@/hoc/withAuth";
import Link from "next/link";

import React from "react";

const SuccessPage = () => {
  return (
    <ClientLayout>
      <MetaData title="Cancel" />
      <div className="custom_container">
        {/* {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && ( */}
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex flex-col items-center">
              <XIcon className="w-12 h-12 text-red-500" />

              <p className="max-w-[600px] text-secondgraphy md:text-xl/tight break-words ">
                Order Cancelled
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/"
                className="px-10 py-2 text-white rounded-md bg-secondgraphy"
              >
                Go back to home
              </Link>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </ClientLayout>
  );
};

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default withAuth(SuccessPage);
