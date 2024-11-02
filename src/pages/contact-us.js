import ClientLayout from "@/components/Layout/ClientLayout";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const ContactUs = () => {
  return (
    <ClientLayout>
      <MetaData title="Contact Us" />
      <section className="container py-5 mx-auto text-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <p className="pb-5 text-xl">CONTACT US</p>
          <p className="pb-3 text-base">
            Our friendly, in-house customer success team are on hand to
            guarantee the best print experience. So if you’d like to discuss the
            print options for your next project, if you’d like to talk about an
            existing order, or if you can’t find something on our website, they
            can help!
          </p>
          <p className="text-base">
            You can save time by searching for your query below. If you can’t
            find the answer you’re looking for, choose your preferred method of
            contact and get in touch directly with our team.
          </p>
        </div>
        {/*  <div className="p-3 mt-5 text-center text-white rounded-md bg-secondgraphy">
          <p className="py-3 text-3xl">What can we help you with?</p>
          <div className="max-w-2xl mx-auto my-5">
            <label for="hs-trailing-button-add-on" className="sr-only">
              Label
            </label>
            <div className="flex w-full rounded-sm">
              <input
                type="text"
                id="hs-trailing-button-add-on"
                name="hs-trailing-button-add-on"
                className="w-full px-5 rounded-none text-secondgraphy ti-form-input rounded-s-sm focus:z-10"
                placeholder="Ask a question"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center flex-shrink-0 gap-2 px-3 py-2 text-sm font-semibold transition-all border border-transparent text-secondgraphy rounded-e-sm bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-between grid-cols-1 gap-1 mt-5 text-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 bg-secondgraphy">
          <div className="flex flex-col items-center justify-center w-full p-4 bg-white min-h-56">
            <div>
              <p className="text-xl font-semibold">CHAT</p>
              <p className="text-base">
                Ask our UK care team online, we’ll answer in a flash!
              </p>
            </div>
            <div className="mt-5">
              <button className="px-3 py-1 text-lg text-white uppercase rounded-sm bg-lime-500">
                Live chat now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-4 bg-white min-h-56">
            <div>
              <p className="text-xl font-semibold">CHAT</p>
              <p className="text-base">
                Ask our UK care team online, we’ll answer in a flash!
              </p>
            </div>
            <div className="mt-5">
              <button className="px-3 py-1 text-lg text-white uppercase rounded-sm bg-lime-500">
                Live chat now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-4 bg-white min-h-56">
            <div>
              <p className="text-xl font-semibold">CHAT</p>
              <p className="text-base">
                Ask our UK care team online, we’ll answer in a flash!
              </p>
            </div>
            <div className="mt-5">
              <button className="px-3 py-1 text-lg text-white uppercase rounded-sm bg-lime-500">
                Live chat now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-4 bg-white min-h-56">
            <div>
              <p className="text-xl font-semibold">CHAT</p>
              <p className="text-base">
                Ask our UK care team online, we’ll answer in a flash!
              </p>
            </div>
            <div className="mt-5">
              <button className="px-3 py-1 text-lg text-white uppercase rounded-sm bg-lime-500">
                Live chat now
              </button>
            </div>
          </div>
        </div> */}
        <div className="p-3 mt-5 text-center text-white rounded-md bg-secondgraphy">
          <p className="pt-3 text-xl">Call us on 020 7377 9400</p>
          <div className="mb-3">
            Email us at{" "}
            <a href="mailto:weareprintlab@gmail.com" className="font-bold">
              weareprintlab@gmail.com
            </a>
          </div>
          <p className="pb-5">
            Our UK care team is available Monday to Friday, 8am to 6pm.
          </p>
        </div>
      </section>
    </ClientLayout>
  );
};

export default ContactUs;
