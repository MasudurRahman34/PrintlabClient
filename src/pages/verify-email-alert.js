import ClientLayout from "@/components/Layout/ClientLayout";
import MetaData from "@/components/ui/MetaData";
import withAuth from "@/hoc/withAuth";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { resendVerificationEmailMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const VerifyEmailAlert = () => {
  const router = useRouter();
  const showToastMessage = useToastMessage();
  const { session, isAuthenticated, isLoading } = useAuth();
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

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading]);

  return (
    <ClientLayout>
      <MetaData title="Verify Email" />
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
              <button
                className="px-4 py-2 mt-4 text-white rounded-md bg-secondgraphy"
                onClick={handleResendVerificationEmail}
                disabled={isPending}
              >
                {isPending
                  ? "Sending verification email..."
                  : "Resend verification email"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default withAuth(VerifyEmailAlert);
