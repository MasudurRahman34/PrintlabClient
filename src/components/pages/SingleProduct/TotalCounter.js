import React from "react";

const TotalCounter = () => {
  return (
    <section className="fixed bottom-0 left-0 w-full border-2 bg-secondgraphy border-primary">
      <div className="container py-3">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <div className="flex-1 text-white text-end ">
            <p>
              <strong className="text-2xl">Fri. 12th Apr £10.89</strong> Ex Vat
            </p>
            <p>
              <strong>£13.07</strong> Inc Vat
            </p>
          </div>
          <div className="flex-1 w-full">
            <button className="w-full py-2 font-bold text-white border rounded-md bg-primary border-primary-light hover:bg-primary-light">
              Add to Busket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalCounter;
