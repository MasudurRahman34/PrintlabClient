import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const OrderItemTable = ({ orderItems }) => {
  console.log(orderItems);
  return (
    <table className="w-full border border-collapse border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-2 text-left border border-gray-200">SR</th>
          <th className="border border-gray-200">Combination String</th>
          <th className="border border-gray-200">Status</th>
          <th className="border border-gray-200">Total</th>
          <th className="border border-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orderItems?.map((orderItem, idx) => (
          <tr key={orderItem.id}>
            <td className="px-2 text-left border border-gray-200">{idx + 1}</td>
            <td className="text-center border border-gray-200">
              {orderItem.combination_string}
            </td>
            <td className="text-center border border-gray-200">
              {orderItem.status}
            </td>
            <td className="text-center border border-gray-200">
              {formatPrice(orderItem.total)}
            </td>
            <td className="text-center border border-gray-200">
              <Link href={`/my-account/order-items/${orderItem.id}`}>View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderItemTable;
