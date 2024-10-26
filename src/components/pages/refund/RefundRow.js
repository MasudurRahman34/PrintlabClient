import { humanReadableDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const RefundRow = ({ idx, item }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{idx + 1}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {humanReadableDate(item.created_at)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link
          href={`/my-account/order-items/${item.order_item.id}`}
          className="hover:underline"
        >
          {item.order_item.order_item_number}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{item.refund_reason}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">
          {item.status && item.status === 0 ? (
            <span className="text-yellow-500">Pending</span>
          ) : item.status === 1 ? (
            <span className="text-green-500">Approved</span>
          ) : (
            <span className="text-red-500">Rejected</span>
          )}
        </p>
      </td>
      {/* 
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{item.status}</p>
      </td> */}
    </tr>
  );
};

export default RefundRow;
