import ClientLayout from "@/components/Layout/ClientLayout";
import { useAuth } from "@/hooks/useAuth";
import { getCheckoutSessionQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const SuccessPage = () => {
  const { session } = useAuth();
  const router = useRouter();
  const { session_id } = router.query;

  const { data, isLoading, isError, refetch, error } = useQuery({
    queryKey: ["checkout-session", session_id, session?.token],
    queryFn: () =>
      getCheckoutSessionQuery({ session_id, token: session?.token }),
    enabled: !!session?.token && !!session_id,
  });

  return (
    <ClientLayout>
      <div className="container mx-auto">
        {/* {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && ( */}
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <CircleCheckIcon className="w-12 h-12 text-green-500" />
            <h1 className="text-3xl font-semibold">Payment successful</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/tight dark:text-gray-400">
              Your order has been confirmed and is now being processed. Thank
              you for shopping with us!
            </p>
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

export default SuccessPage;
