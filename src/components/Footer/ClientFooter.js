import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLock,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LabAccordion from "../ui/LabAccordion";

const navItems = [
  {
    title: "Help",
    links: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "Help Center", href: "/help" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "/about-us" },
      /*  { name: "weareprintlab Blog", href: "#" }, */
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { name: "FAQ", href: "/faq" },
      /*  { name: "Sample Packs", href: "#" },
      { name: "Tradeprint API", href: "#" },
      { name: "Tradeprint PRO", href: "#" }, */
    ],
  },
  {
    title: "Important",
    links: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy & Cookie Policy", href: "/privacy" },
      { name: "Environmental Policy", href: "/environmental-policy" },
    ],
  },
];

const ClientFooter = () => {
  return (
    <>
      <section className="container py-5 mx-auto text-white">
        <div className="flex flex-col items-center justify-between max-w-5xl gap-3 py-5 mx-auto md:flex-row text-primary-text ">
          <div className="flex-1">
            <p className="text-sm">
              Sign me up for exclusive offers and print inspiration by email
            </p>
          </div>

          <div className="flex-1">
            <div>
              <label for="hs-trailing-button-add-on" class="sr-only">
                Label
              </label>
              <div class="flex rounded-sm flex-wrap gap-2 md:gap-0 justify-center ">
                <input
                  type="text"
                  id="hs-trailing-button-add-on"
                  name="hs-trailing-button-add-on"
                  class="rounded-none ti-form-input rounded-s-sm focus:z-10"
                />
                <button
                  type="button"
                  class="inline-flex items-center justify-center flex-shrink-0 gap-2 px-3 py-2 text-sm font-semibold  transition-all border border-transparent rounded-e-sm bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary text-secondgraphy"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full text-typography" />
        <div className="flex flex-col gap-4 py-5 md:flex-row">
          <div className="flex flex-col items-start justify-between flex-1 w-full gap-5 md:flex-row md:gap-10">
            {navItems.map((navItem, index) => (
              <div key={index} className="w-full">
                <div className="hidden md:block">
                  <h4 className="text-lg font-semibold ">{navItem.title}</h4>
                  <ul className="space-y-2">
                    {navItem.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-sm hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="block md:hidden">
                  <LabAccordion title={navItem.title}>
                    <ul className="space-y-2">
                      {navItem.links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-sm hover:text-primary"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </LabAccordion>
                </div>
              </div>
            ))}
          </div>

          <div className="block md:hidden">
            <LabAccordion title="Social Links" triggerStyle="bg-primary">
              <div>
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex items-center w-full max-w-xl gap-2">
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
                  >
                    <FaLinkedinIn />
                  </Link>{" "}
                  <Link
                    href="https://www.facebook.com/ukprintlab"
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
                  >
                    <FaFacebookF />
                  </Link>{" "}
                  <Link
                    href="https://www.instagram.com/printlab_uk/"
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
                  >
                    <FaInstagram />
                  </Link>{" "}
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
                  >
                    <FaYoutube />
                  </Link>{" "}
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
                  >
                    <FaXTwitter />
                  </Link>{" "}
                </div>
              </div>
            </LabAccordion>
          </div>
          <div className="hidden md:block">
            <h4 className="mb-2 text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex items-center w-full max-w-xl gap-2">
              <Link
                href="#"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaLinkedinIn />
              </Link>{" "}
              <Link
                href="https://www.facebook.com/ukprintlab"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaFacebookF />
              </Link>{" "}
              <Link
                href="https://www.instagram.com/printlab_uk/"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaInstagram />
              </Link>{" "}
              <Link
                href="#"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaYoutube />
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-typography">
        <div className="container py-5 mx-auto ">
          {/* <div className="flex flex-col gap-4 py-5 md:flex-row item">
            <div className="flex flex-col items-center flex-1 gap-4 md:flex-row">
              <div className="flex items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl">
                <span>
                  <FaLock />
                </span>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/images/visa logo@2x.png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/american express logo@2x.png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>

                <div>
                  <img
                    src="/assets/images/Group 6@2x.png"
                    className="object-contain h-6"
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/Group 3@2x.png"
                    className="object-contain h-6"
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/paypal.png"
                    className="object-contain h-6"
                    alt="Visa Logo"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center flex-1 gap-4 md:flex-row">
              <div className="flex items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl">
                <span>PARTNERSHIPS & ACCREDITATIONS</span>
              </div>
              <div className="flex items-center flex-1 gap-3">
                <div>
                  <img
                    src="/assets/images/BPIF_Member_logo_1 (1).png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/ipia@2x.png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/BPIF_Member_logo_1 (1).png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/ipia@2x.png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/BPIF_Member_logo_1 (1).png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/ipia@2x.png"
                    className="object-contain h-6 "
                    alt="Visa Logo"
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* <hr className="w-full text-white" /> */}
          <div className="flex items-center justify-between w-full py-5 text-sm sm:text-base ">
            <p>
              2024 © weareprintlab. All Rights Reserved. weareprintlab is a
              trading
            </p>
            <Link
              href="#"
              target="_blank"
              className="hidden text-white underline hover:text-primary md:block"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientFooter;
