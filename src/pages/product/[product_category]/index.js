import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

const UnknownPage = () => {
  return (
    <ClientLayout>
      <div className="flex items-center justify-center w-full h-44">
        <div>
          <h1 className="text-4xl font-bold text-center">404</h1>
          <p className="text-center">Page not found</p>
        </div>
      </div>
    </ClientLayout>
  );
};

export default UnknownPage;
