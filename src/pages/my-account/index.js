import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const index = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="PrintLab Pro">
        <div className="flex items-center justify-center w-full py-5">
          <div className="max-w-lg ">
            <div className="text-secondgraphy">
              <h1 className="text-2xl font-bold text-center ">My Account</h1>
              <p className="text-sm text-center">
                Welcome to your PrintLab Pro account. Here you can manage your
                account settings, preferences, payment settings, and more.
              </p>
            </div>
            <div>
              <form>
                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Name
                  </label>

                  <Input placeHolder="Enter your name" name="name" id="name" />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Company
                  </label>
                  <Input
                    placeHolder="Enter your company name"
                    name="company"
                    id="company"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Email
                  </label>

                  <Input
                    placeHolder="Enter your email address"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Phone
                  </label>

                  <Input
                    placeHolder="Enter your phone number"
                    name="phone"
                    id="phone"
                  />
                </div>
                <div className="flex items-center my-3 space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>

                <div>
                  <Button>Save</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AccountLayout>
    </ClientLayout>
  );
};

export default index;
