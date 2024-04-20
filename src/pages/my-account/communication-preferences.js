import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CommunicationPreferences = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Communication Preferences">
        <div className="w-full py-5 ">
          <div className="max-w-lg ">
            <div className="text-secondgraphy">
              <h1 className="text-2xl font-bold ">
                Email Marketing Preference
              </h1>
              <p className="text-sm ">
                Sign up to hear about the latest products, exclusive offers, and
                news from the company.
              </p>
            </div>
            <div>
              <form>
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Confirm your email address
                  </label>
                  <Input
                    placeHolder="Enter your email address"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="subscribe"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Subscribe or unsubscribe from receiving marketing emails
                    from us*
                  </label>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Please select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subscribe">
                        Please subscribe me
                      </SelectItem>
                      <SelectItem value="unsubscribe">
                        Please unsubscribe me
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="my-2">
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

export default CommunicationPreferences;
