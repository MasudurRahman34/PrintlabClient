import ClientLayout from "@/components/Layout/ClientLayout";
import Loader from "@/components/Loader/Loader";
import { useAuth } from "@/hooks/useAuth";
import { verifyEmailQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const EmailVerify = () => {
  const router = useRouter();
  const { isAuthenticated, session, user } = useAuth();
  const { verify_url, signature } = router.query;

  const { data, isLoading, refetch, isError, error } = useQuery({
    queryKey: ["verifyEmail", verify_url, session, signature],
    queryFn: () =>
      verifyEmailQuery({ verify_url, token: session?.token, signature }),
    enabled: !!verify_url && !!session && !!signature,
  });
  console.log(data, isLoading, isError, error);

  return (
    <ClientLayout>
      <div className="container mx-auto ">
        <div className="flex items-center justify-center  h-[30vh]">
          <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
            {isLoading ? (
              <div>
                <Loader />

                <h1 className="mb-4 text-2xl font-bold text-center">
                  Verifying your email
                </h1>
              </div>
            ) : data && data.code === 200 ? (
              <div>
                <h1 className="mb-4 text-2xl font-bold text-center">
                  {data?.message || "Your email is verified"}
                </h1>

                <div className="text-center ">
                  <Link
                    href="/"
                    className="px-4 py-2 mt-4 text-white rounded-md bg-secondgraphy"
                  >
                    Continue to Printlab
                  </Link>
                </div>
              </div>
            ) : data.code === 401 ? (
              <div>
                <h1 className="mb-4 text-2xl font-bold text-center">
                  You are not logged in
                </h1>
                <p className="text-center">Please login to verify your email</p>
                <div className="text-center ">
                  <Link
                    href="/login"
                    className="px-4 py-2 mt-4 text-white rounded-md bg-secondgraphy"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="mb-4 text-2xl font-bold text-center">
                  {data?.message ||
                    "There was an error verifying your email. Please try again."}
                </h1>
                <p className="text-center">
                  If you are having trouble verifying your email, please click
                  the button below to resend the verification email
                </p>
                <div className="text-center ">
                  <button className="px-4 py-2 mt-4 text-white rounded-md bg-secondgraphy">
                    Resend Verification Email
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default EmailVerify;
