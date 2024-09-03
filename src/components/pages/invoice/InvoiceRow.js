import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

const DownloadInvoice = dynamic(() => import("./DownloadInvoice"), {
  ssr: false,
});
const PrintInvoice = dynamic(() => import("./PrintInvoice"), {
  ssr: false,
});

const InvoiceRow = ({ item, idx }) => {
  console.log(item);

  const invoiceGeneratedObj = useMemo(() => {
    return {
      outputType: "blob", // save, string, datauristring
      returnJsPDFDocObject: true,
      fileName: "Invoice 2021",
      orientationLandscape: false,
      compress: true,
      logo: {
        src: "/assets/logo/printlab-logo.jpg",
        type: "PNG", //optional, when src= data:uri (nodejs case)
        width: 53.33, //aspect ratio = width/height
        height: 15.66,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0, //negative or positive num, from the current position
        },
      },
      /* stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: "JPG", //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0, //negative or positive num, from the current position
        },
      }, */
      business: {
        name: "Printlab",
        address: "London ,172 Commercial Road",
        phone: "07411284290",
        email: "info@weareprintlab.co.uk",
        website: "https://weareprintlab.co.uk",
      },
      contact: {
        label: "Invoice issued for:",
        name: `${item.billing_address.first_name} ${item.billing_address.last_name}`,
        address: `${item.billing_address.country}, ${item.billing_address.address}`,
        phone: item.billing_address.phone,
        email: item.billing_address.email,
      },
      invoice: {
        label: `Invoice #: ${item.order_number}`,
        num: item.id,
        invDate: `Invoice Date: ${item.order_date}`,
        invGenDate: `Invoice Generated: ${item.order_date}`,
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "Description",
            style: {
              width: 120,
            },
          },

          { title: "Price" },
          { title: "Vat" },
        ],
        table: item.order_items.map((product, index) => {
          return [
            `${product.product_title} - ${product.combination_string}`,
            formatPrice(product.total),
            formatPrice(product.tax),
          ];
        }),
        additionalRows: [
          {
            col1: "Total:",
            col2: formatPrice(item.total_price),
            style: {
              fontSize: 14, //optional, default 12
            },
          },
          {
            col1: "VAT:",
            col2: formatPrice(item.total_tax),

            style: {
              fontSize: 10, //optional, default 12
            },
          },
        ],
        invDescLabel: "Invoice Note",
        invDesc:
          "Thank you for your business. Please send payment by due date. Please contact us if you have any questions about this invoice. No additional reminder will be sent.",
      },
      footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
    };
  }, [item]);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{idx + 1}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link
          href={`/my-account/orders/${item.id}`}
          className="text-sm text-gray-900"
        >
          {item.order_number}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{item.order_date}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{formatPrice(item.total_price)}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{item.status}</p>
      </td>
      <td className="flex gap-3 px-6 py-4 whitespace-nowrap">
        <DownloadInvoice invoiceGeneratedObj={invoiceGeneratedObj} />
        <PrintInvoice invoiceGeneratedObj={invoiceGeneratedObj} />
      </td>
    </tr>
  );
};

export default InvoiceRow;
