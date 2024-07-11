import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

const VerifyEmailAlert = () => {
  return (
    <ClientLayout>
      <div className="container mx-auto ">
        <div className="flex items-center justify-center  h-[30vh]">
          <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-2xl font-bold text-center">
              Your email is not verified
            </h1>
            <p className="text-center">
              Printlab has sent you an email with a verification link. Please
              check your email and click on the link to verify your email.
            </p>
            <div className="text-center ">
              <button className="px-4 py-2 mt-4 text-white rounded-md bg-secondgraphy">
                Resend Verification Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default VerifyEmailAlert;
