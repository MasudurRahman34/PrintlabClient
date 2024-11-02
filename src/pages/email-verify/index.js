import ClientLayout from "@/components/Layout/ClientLayout";
import Loader from "@/components/Loader/Loader";
import MetaData from "@/components/ui/MetaData";
import withAuth from "@/hoc/withAuth";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { resendVerificationEmailMutation } from "@/resolvers/mutation";
import { verifyEmailQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const EmailVerify = () => {
  const showToastMessage = useToastMessage();
  const router = useRouter();

  const {
    isAuthenticated,
    session,
    user,
    isLoading: authIsLoading,
  } = useAuth();
  const { verify_url, signature } = router.query;

  const { data, isLoading, refetch, isError, error, isSuccess } = useQuery({
    queryKey: ["verifyEmail", verify_url, session, signature],
    queryFn: () =>
      verifyEmailQuery({ verify_url, token: session?.token, signature }),
    enabled: !!verify_url && !!session && !!signature,
  });

  console.log("error", error);

  const { mutate, isPending } = useMutation({
    mutationKey: "resend-verification-email",
    mutationFn: resendVerificationEmailMutation,
  });

  const handleResendVerificationEmail = () => {
    mutate(
      { variables: {}, token: session?.token },
      {
        onSuccess: (data) => {
          toast.success("Verification email sent successfully");
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  const verifyUserSession = async () => {
    const tempUser = user;

    if (tempUser?.email_verified_at) {
      return true;
    }

    const updatedUser = {
      ...tempUser,
      email_verified_at: new Date().toISOString(),
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  useEffect(() => {
    if (isSuccess) {
      verifyUserSession();
    }
  }, [isSuccess]);

  return (
    <ClientLayout>
      <MetaData title="Email Verification" />
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
            ) : data && data?.code === 200 ? (
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
            ) : data?.code === 401 ? (
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
                  {(isError && error?.response?.data?.message) ||
                    "Email verification failed"}
                  {isSuccess && "Email verified successfully"}
                </h1>
                <p className="text-center">
                  If you are having trouble verifying your email, please click
                  the button below to resend the verification email
                </p>
                <div className="text-center ">
                  <button
                    className="px-4 py-2 mt-4 text-white rounded-md bg-secondgraphy"
                    onClick={handleResendVerificationEmail}
                    disabled={isPending}
                  >
                    {isPending ? "Sending verification email" : "Resend Email"}
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

export default withAuth(EmailVerify);
