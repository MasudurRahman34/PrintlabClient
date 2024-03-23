import React from "react";

const ClientHeader = () => {
  return (
    <header>
      <section className="flex items-center justify-between h-20 gap-4 px-5">
        <div className="text-black">
          <h1>TRADEPRINT</h1>
        </div>
        <div className="flex-1">
          <div className="bg-white border-2 border-black rounded-full cursor-pointer">
            <label
              htmlFor="hs-trailing-button-add-on-with-icon"
              className="sr-only"
            >
              Label
            </label>
            <div className="flex rounded-full">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon"
                name="hs-trailing-button-add-on-with-icon"
                className="w-full px-3 text-sm transition-all rounded-full ti-form-input focus:z-10 focus:outline-none focus:ring-0"
              />
              <button
                aria-label="button"
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-e-sm border border-transparent font-semibold  text-black  focus:z-10 focus:outline-none focus:ring-0  transition-all text-sm"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <span></span>
          </div>
        </div>
        <div></div>
      </section>
    </header>
  );
};

export default ClientHeader;
