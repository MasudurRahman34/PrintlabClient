import ClientLayout from "@/components/Layout/ClientLayout";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <ClientLayout>
      <section className="custom_container text-secondgraphy">
        <div>
          <h1 className="mb-3 text-3xl font-medium text-center uppercase">
            CAREERS AT weareprintlab
          </h1>
          <div className="relative">
            <Image
              src="/assets/careers---header-banner.webp"
              width={1200}
              height={400}
            />
            <div>
              <p className="absolute text-xl font-bold transform md:text-6xl text-secondgraphy top-1/3 left-6 md:left-24">
                Grow with us
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-4">
          <div className="col-span-12 p-4 text-white rounded-md md:col-span-4 bg-secondgraphy">
            <h2 className="text-3xl font-medium ">
              Why work at Weareprintlab?
            </h2>
            <p className="mt-4 text-sm md:text-base">
              At Weareprintlab we have ambitious plans for growth; the growth of
              the company utilising technology and innovation and the growth of
              our people by investing in learning, development and leadership
            </p>
            <p className="mt-4 text-sm md:text-base">
              Our team mean a lot to us, diverse in skills and backgrounds, we
              celebrate differences and cultivate an environment where everyone
              can be recognised for who they are and what they bring to the
              table.
            </p>
            <p className="mt-4 text-sm md:text-base">
              We are proud of our culture, driven by our values, we empower and
              engage with our team to give the direction, tools and support to
              make great things happen!
            </p>

            <p className="mt-4 text-sm md:text-base ">
              If this sounds like an environment that you would thrive in, you
              might be the right fit for our team.
            </p>

            <div>
              <h1 className="my-3 text-3xl font-medium">Our Benefits</h1>
              <ul className="text-sm list-disc list-inside">
                <li>
                  Private Health Plan - including Optical and Dental cover
                </li>
                <li>
                  30 days holiday per year - increasing to 33 days with 3 years’
                  service
                </li>
                <li>Life Cover of 3-4x salary</li>
                <li>A day off for your birthday</li>
                <li>Employee Assistance Program</li>
                <li>Volunteer time off</li>
                <li>
                  Access to a discount site including discounted gym
                  memberships, travel, cinema and other leisure and shopping
                  discounts
                </li>
                <li>Employee discounts</li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 p-4 md:col-span-8">
            <div className="py-3 border-b">
              <h1 className="text-2xl font-medium">Are We A Great Match?</h1>
              <p className="mt-4 text-sm md:text-base">
                We are looking for people who are passionate about what they do
                and are looking to make a difference. We are looking for people
                who are excited about the opportunity to work in a fast-paced
                environment and are looking to grow with us.
              </p>
            </div>
            <div className="py-3 border-b">
              <h1 className="text-2xl font-medium">Are We A Great Match?</h1>
              <p className="mt-4 text-sm md:text-base">
                We are looking for people who are passionate about what they do
                and are looking to make a difference. We are looking for people
                who are excited about the opportunity to work in a fast-paced
                environment and are looking to grow with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};

export default Page;
