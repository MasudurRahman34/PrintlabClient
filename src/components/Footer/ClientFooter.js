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

const navItems = [
  {
    title: "Help",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "#" },
      { name: "Tradeprint Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "ISO Frameworks", href: "#" },
    ],
  },
  {
    title: "PRO Tools",
    links: [
      { name: "Pro Tools", href: "#" },
      { name: "Sample Packs", href: "#" },
      { name: "Tradeprint API", href: "#" },
      { name: "Tradeprint PRO", href: "#" },
    ],
  },
  {
    title: "Important",
    links: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy & Cookie Policy", href: "#" },
      { name: "Environmental Policy", href: "#" },
      { name: "Two Sides", href: "#" },
      { name: "Modern Slavery Statement", href: "#" },
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
              <div class="flex rounded-sm">
                <input
                  type="text"
                  id="hs-trailing-button-add-on"
                  name="hs-trailing-button-add-on"
                  class="rounded-none ti-form-input rounded-s-sm focus:z-10"
                />
                <button
                  type="button"
                  class="inline-flex items-center justify-center flex-shrink-0 gap-2 px-3 py-2 text-sm font-semibold text-white transition-all border border-transparent rounded-e-sm bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary"
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
              <div key={index}>
                <h4 className="text-lg font-semibold ">{navItem.title}</h4>
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
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center w-full max-w-xl gap-2">
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaLinkedinIn />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaFacebookF />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaInstagram />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaYoutube />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaTiktok />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaXTwitter />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaLinkedinIn />
              </Link>{" "}
              <Link
                href="#"
                className="flex items-center justify-center rounded-full bg-primary w-7 h-7 text-secondgraphy"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <ul className="flex gap-5">
              <li>
                <a href="#" className="text-white hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-white bg-typography">
        <div className="container py-5 mx-auto ">
          <div className="flex flex-col gap-4 py-5 md:flex-row item">
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
          </div>
          <hr className="w-full text-white" />
          <div className="flex items-center justify-between w-full py-5 text-sm sm:text-base md:text-lg lg:text-xl">
            <p>
              2024 © Tradeprint. All Rights Reserved. Tradeprint is a trading
            </p>
            <Link
              href="#"
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
