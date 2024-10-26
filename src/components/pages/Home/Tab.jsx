import React from "react";

const Tab = ({ tabList = [], setActiveTab, activeTab }) => {
  return (
    <div className="border-b dark:border-white/10">
      <nav
        className="-mb-0.5 flex justify-center space-x-6 rtl:space-x-reverse overflow-x-auto"
        aria-label="Tabs"
      >
        {tabList?.map((tab, index) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            type="button"
            key={index}
            className={`  border-b-2   pb-1 pt-4 px-1 inline-flex items-center gap-2    whitespace-nowrap text-defaulttextcolor   active ${
              activeTab === tab.id
                ? "text-secondgraphy border-secondgraphy font-semibold"
                : " "
            }`}
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tab;
