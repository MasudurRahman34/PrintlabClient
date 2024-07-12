import React from "react";
import dynamic from "next/dynamic";
import Box from "@/components/ui/Box";
const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const PaymentPageComponent = () => {
  return (
    <div className="mb-8 ">
      <Stepper activeStep={3} />
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="w-full">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:col-span-2 max-md:order-1">
                <Box boxTitle="payment">
                  <div className="p-4">
                    <h2 className="text-3xl font-extrabold text-gray-800">
                      Make a payment
                    </h2>
                    <p className="mt-4 text-sm text-gray-800">
                      Complete your transaction swiftly and securely with our
                      easy-to-use payment process.
                    </p>

                    <form className="max-w-lg mt-8">
                      <div className="grid gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Cardholder's Name"
                            className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                          />
                        </div>

                        <div className="flex overflow-hidden bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 ml-3"
                            viewBox="0 0 32 20"
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#f93232"
                              data-original="#f93232"
                            />
                            <path
                              fill="#fed049"
                              d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                              className="hovered-path"
                              data-original="#fed049"
                            />
                          </svg>
                          <input
                            type="number"
                            placeholder="Card Number"
                            className="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <input
                              type="number"
                              placeholder="EXP."
                              className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                            />
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="CVV"
                              className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-8 w-40 py-3.5 text-sm bg-secondgraphy text-white rounded-md  tracking-wide"
                      >
                        Pay{" "}
                      </button>
                    </form>
                  </div>
                </Box>
              </div>

              <div className="p-6 bg-gray-100 rounded-md">
                <h2 className="text-3xl font-extrabold text-gray-800">
                  $250.00
                </h2>

                <ul className="mt-8 space-y-4 text-gray-800">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Split Sneakers{" "}
                    <span className="ml-auto font-bold">$150.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Echo Elegance{" "}
                    <span className="ml-auto font-bold">$90.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Tax <span className="ml-auto font-bold">$10.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 pt-4 text-sm font-bold border-t-2">
                    Total <span className="ml-auto">$250.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageComponent;
