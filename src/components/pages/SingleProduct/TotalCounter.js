import React from "react";

const TotalCounter = () => {
  return (
    <section className="fixed bottom-0 left-0 w-full border-2 h-28 bg-secondary border-primary">
      <div className="custom_container">
        <div className="flex items-center justify-center gap-5">
          <div className="flex-1 text-end">
            <p>
              <strong>Fri. 12th Apr £10.89</strong> Ex Vat
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
