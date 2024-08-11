import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MetaData from "@/components/ui/MetaData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/router";
import React from "react";

const PaymentSettings = () => {
  const router = useRouter();
  return (
    <ClientLayout>
      <MetaData title="Payment Settings" />
      <AccountLayout breadcrumb="Account Settings">
        <section>
          <div className="my-2">
            <p className="text-lg font-bold">Default Payment Method</p>
          </div>
          <div>
            <RadioGroup defaultValue="credit">
              <div className="flex items-center w-full space-x-5 md:space-x-16 lg:space-x-36">
                <h1>Default</h1>
                <h1>Payment Method</h1>
              </div>
              <Label
                htmlFor="r1"
                className="flex items-center w-full p-4 space-x-5 border rounded md:space-x-16 lg:space-x-36"
              >
                <RadioGroupItem value="credit" id="r1" />
                <div className="flex items-center space-x-4">
                  <span>Credit Card</span>
                  <img
                    src="https://www.tradeprint.co.uk/dam/jcr:d9890c05-8389-4684-b2a4-56fdf7317a1d/Card%20Payments%20Accepted.jpg"
                    alt=""
                    className="w-24"
                  />
                </div>
              </Label>
              <Label
                htmlFor="r2"
                className="flex items-center w-full p-4 space-x-5 border rounded md:space-x-16 lg:space-x-36"
              >
                <RadioGroupItem value="paypal" id="r2" />
                <div className="flex items-center space-x-4">
                  <span>Paypal</span>
                  <img
                    src="https://www.tradeprint.co.uk/dam/jcr:e8530c50-9c43-4b52-bb7c-07a1edbeaf29/paypal.png"
                    alt=""
                    className="w-24"
                  />
                </div>
              </Label>
            </RadioGroup>
          </div>
          <div className="my-2">
            <div className="py-2">
              <h1 className="text-center">No saved Cards</h1>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-start md:flex-row">
              <div className="w-full max-w-[200px]">
                <img
                  src="https://www.tradeprint.co.uk/dam/jcr:795e1904-eb36-443b-9f04-8dbd47517bd6/apply-for-on-account.png"
                  alt=""
                />
              </div>
              <div className="flex-1 ml-2 ">
                <h1 className="font-semibold">Credit Account</h1>
                <p className="text-sm">
                  Speed up your order process with the credit account, and pay
                  for your full months print spend in just one transaction.
                </p>
              </div>
              <div className="text-center">
                <p className="font-semibold">It only takes 5 minutes!</p>
                <Button
                  onClick={() => {
                    router.push("/my-account/credit-application");
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AccountLayout>
    </ClientLayout>
  );
};

export default PaymentSettings;
