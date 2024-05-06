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
import { useForm } from "react-hook-form";

const CommunicationPreferences = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Communication Preferences">
        <div className="w-full py-5 ">
          <div className="max-w-lg ">
            <div className="text-secondgraphy">
              <h1 className="text-2xl font-bold mb-2 ">
                Email Marketing Preference
              </h1>
              <p className="text-sm ">
                Sign up to hear about the latest products, exclusive offers, and
                news from the company.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondgraphy mb-2"  
                  >
                    Confirm your email address
                  </label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", { required: true })}
                    />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="subscribe"
                    className="block text-sm font-medium text-secondgraphy mb-2"
                  >
                    Subscribe or unsubscribe from receiving marketing emails
                    from us*
                  </label>

                  <Select {...register("subscribeation")} >
                    <SelectTrigger className="w-full">
                      <SelectValue  placeholder="Please select one" />
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
                <div className="my-2 mt-5 ">
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
