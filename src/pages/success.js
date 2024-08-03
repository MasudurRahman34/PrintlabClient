import ClientLayout from "@/components/Layout/ClientLayout";
import Loader from "@/components/Loader/Loader";
import withAuth from "@/hoc/withAuth";
import { useAuth } from "@/hooks/useAuth";
import { getCheckoutSessionQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const SuccessPage = () => {
  const { session } = useAuth();
  const router = useRouter();
  const { session_id } = router.query;

  const { data, isLoading, isError, refetch, error, isSuccess } = useQuery({
    queryKey: ["checkout-session", session_id, session?.token],
    queryFn: () =>
      getCheckoutSessionQuery({ session_id, token: session?.token }),
    enabled: !!session?.token && !!session_id,
  });

  return (
    <ClientLayout>
      <div className="custom_container">
        {/* {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && ( */}
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            {isLoading ? (
              <div>
                <Loader />
                <h1>Checking Order status </h1>
              </div>
            ) : (
              <>
                {isError ? (
                  <div className="flex flex-col items-center">
                    <XIcon className="w-12 h-12 text-red-500" />

                    <p className="max-w-[600px] text-secondgraphy md:text-xl/tight break-words dark:text-gray-400">
                      {error.response?.data?.message || "An error occurred"}
                    </p>
                  </div>
                ) : (
                  isSuccess && (
                    <div className="flex flex-col items-center">
                      <CircleCheckIcon className="w-12 h-12 text-green-500" />
                      <h1 className="text-3xl font-semibold">
                        Payment successful
                      </h1>
                      <p className="max-w-[600px] text-secondgraphy md:text-xl/tight dark:text-gray-400">
                        {data?.data}
                      </p>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
        {/* )} */}
      </div>
    </ClientLayout>
  );
};

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

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
