import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
import React from "react";

const helpLinking = [
  {
    id: 1,
    title: "Artwork Services",
    desc: "All the information you need on what our artwork services have to offer, and which one is best for you. you and your ...",
    href: "/help/artwork-services",
  },
  {
    id: 2,
    title: "Artwork Support",
    desc: "Helping you get your artwork set up for print. ",
    href: "/help/artwork-support",
  },
  {
    id: 3,
    title: "Product Specific Artwork Queries",
    desc: "Looking for extra information about a product?",
    href: "/help/product-specific-artwork-queries",
  },
  {
    id: 4,
    title: "Ordering and Delivery",
    desc: "Help with your account, orders and delivery.",
    href: "/help/ordering-and-delivery",
  },
  {
    id: 5,
    title: "Contact Us",
    desc: "Here's where you can find ways to get in touch with us. ",
    href: "/help/contact-us",
  },
  {
    id: 6,
    title: "FAQs",
    desc: "Find answers to our most frequently asked questions.",
    href: "/help/faqs",
  },
];

const popularArticles = [
  {
    id: 1,
    title: `
        What's Included In Your Just Print Artwork Service?
      `,
    href: "/help/whats-included-in-your-just-print-artwork-service",
  },
  {
    id: 2,
    title: `
            How To Prepare Your Artwork For Print
        `,
    href: "/help/how-to-prepare-your-artwork-for-print",
  },
  {
    id: 3,
    title: `
            How To Create A Print-Ready PDF
        `,
    href: "/help/how-to-create-a-print-ready-pdf",
  },
  {
    id: 4,
    title: `
            How To Use Our Free Online Design Tool
        `,
    href: "/help/how-to-use-our-free-online-design-tool",
  },
  {
    id: 5,
    title: `
            How To Use Our Free Online Design Tool
        `,
    href: "/help/how-to-use-our-free-online-design-tool",
  },
  {
    id: 6,
    title: `
            How To Use Our Free Online Design Tool
        `,
    href: "/help/how-to-use-our-free-online-design-tool",
  },
  {
    id: 7,
    title: `
            How To Use Our Free Online Design Tool
        `,
    href: "/help/how-to-use-our-free-online-design-tool",
  },
  {
    id: 8,
    title: `
            How To Use Our Free Online Design Tool
        `,
    href: "/help/how-to-use-our-free-online-design-tool",
  },
  {
    id: 9,
    title: `
            How To Use Our Free Online Design Tool
        `,
    href: "/help/how-to-use-our-free-online-design-tool",
  },
];

const help = () => {
  return (
    <ClientLayout>
      <div className="p-3 text-center rounded-md bg-red-50">
        <div className="py-3">
          <h1 className="text-4xl font-medium">Need help?</h1>
          <p className="text-lg ">What can we help you with?</p>
        </div>
        <div className="max-w-2xl mx-auto my-5">
          <label for="hs-trailing-button-add-on" class="sr-only">
            Label
          </label>
          <div class="flex rounded-sm">
            <input
              type="text"
              id="hs-trailing-button-add-on"
              name="hs-trailing-button-add-on"
              class="rounded-none ti-form-input rounded-s-sm focus:z-10"
              placeholder="Ask a question"
            />
            <button
              type="button"
              class="inline-flex items-center justify-center flex-shrink-0 gap-2 px-3 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-e-sm bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className="container py-10 mx-auto">
        <div>
          <div className="grid-cols-3 gap-4 space-y-6 text-sm text-center text-white rounded-sm sm:grid sm:space-y-0 ">
            {helpLinking.map((helpLink) => (
              <Link
                key={helpLink.id}
                href={helpLink.href}
                className="flex items-center justify-center w-full h-40 p-4 hover:bg-primary-light bg-primary-dark"
              >
                <div>
                  <h2 className="text-xl font-semibold">{helpLink.title}</h2>
                  <p className="mt-2">{helpLink.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="py-10">
            <h2 className="text-2xl font-semibold">Popular Articles</h2>
            <div className="grid-cols-3 gap-5 mt-5 sm:grid">
              {popularArticles.map((popularArticle) => (
                <div
                  key={popularArticle.id}
                  className="w-full pb-2 border-b border-gray-300"
                >
                  <Link href={popularArticle.href}>
                    <h2 className="text-base ">{popularArticle.title}</h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default help;
