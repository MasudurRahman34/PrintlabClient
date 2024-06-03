"use Client";
import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ClientLayout>
      <AccountLayout breadcrumb="PrintLab Pro">
        <div className="flex items-center justify-start w-full py-5">
          <div className="max-w-lg ">
            <div className="text-secondgraphy">
              <h1 className="text-2xl font-bold ">My Account</h1>
              <p className="text-sm ">
                Welcome to your PrintLab Pro account. Here you can manage your
                account settings, preferences, payment settings, and more.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    {...register("name", { required: true })}
                    placeHolder="Enter your name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Company
                  </label>
                  <Input
                    {...register("company", { required: true })}
                    placeHolder="Enter your name"
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
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="phon"
                    className="block text-sm font-medium text-secondgraphy"
                  >
                    Phone
                  </label>

                  <Input
                    type="text"
                    placeHolder="Enter your phone number"
                    {...register("phon", { required: true })}
                    name="phon"
                    id="phon"
                  />
                </div>
                <div className="flex items-center my-3 space-x-2">
                  <Checkbox id="terms" required />
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

export default Index;
