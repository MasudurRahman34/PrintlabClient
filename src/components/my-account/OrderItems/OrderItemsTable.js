import { formatPrice } from "@/lib/utils";
import { formatDate } from "date-fns";
import Link from "next/link";
import React from "react";

const OrderItemTable = ({ orderItems }) => {
  return (
    <table className="w-full border border-collapse border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-2 text-left border border-gray-200">SR</th>
          <th className="px-2 text-left border border-gray-200">
            Order Item No:
          </th>
          <th className="px-2 text-left border border-gray-200">
            Product Name
          </th>

          <th className="px-2 text-left border border-gray-200 min-w-52">
            Combination String
          </th>
          <th className="px-2 text-left border border-gray-200">Date</th>
          <th className="border border-gray-200">Status</th>
          <th className="border border-gray-200">Total</th>
          <th className="border border-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orderItems?.map((orderItem, idx) => (
          <tr key={orderItem.id}>
            <td className="px-2 text-left border border-gray-200">{idx + 1}</td>
            <td className="px-2 text-left border border-gray-200">
              {orderItem.order_item_number}
            </td>
            <td className="px-2 text-left border border-gray-200">
              {orderItem.product.title}
            </td>

            <td className="px-2 overflow-y-auto border border-gray-200 text-start min-w-52">
              {orderItem.combination_string}
            </td>
            <td className="px-2 text-left border border-gray-200">
              {formatDate(new Date(orderItem.created_at), "dd/MM/yyyy")}
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
