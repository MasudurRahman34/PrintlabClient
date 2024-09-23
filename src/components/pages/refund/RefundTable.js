import React from "react";
import RefundRow from "./RefundRow";

const RefundTable = ({ refunds }) => {
  console.log(refunds);

  return (
    <table className="w-full border border-collapse border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            SL
          </th>

          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Date
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Reason
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Status
          </th>
          {/*  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Actions
          </th> */}
        </tr>
      </thead>
      <tbody>
        {refunds.map((item, idx) => (
          <RefundRow key={item.id} item={item} idx={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default RefundTable;
