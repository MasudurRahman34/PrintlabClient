import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const OrderTable = ({ orders }) => {
  console.log(orders);

  return (
    <table className="w-full border border-collapse border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-2 text-left border border-gray-200">Order #</th>
          <th className="px-2 text-left border border-gray-200">Order Items</th>
          <th className="border border-gray-200">Date</th>
          <th className="border border-gray-200">Status</th>
          <th className="border border-gray-200">Total</th>
          <th className="border border-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order) => (
          <tr key={order.id}>
            <td className="px-2 text-left border border-gray-200">
              {order.order_number}
            </td>
            <td className="px-2 text-left border border-gray-200">
              {order.order_items.map((item) => (
                <Link href={`/my-account/order-items/${item.id}`} key={item.id}>
                  <p>{item.order_item_number}</p>
                </Link>
              ))}
            </td>
            <td className="text-center border border-gray-200">
              {order.order_date}
            </td>
            <td className="text-center border border-gray-200">
              {order.status}
            </td>
            <td className="text-center border border-gray-200">
              {formatPrice(order.total_price)}
            </td>
            <td className="text-center border border-gray-200">
              <Link href={`/my-account/orders/${order.id}`}>View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
