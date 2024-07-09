import React from "react";
import jsPDFInvoiceTemplate from "jspdf-invoice-template";
import {} from "jspdf-invoice-template";
import { IoPrint } from "react-icons/io5";

const PrintInvoice = () => {
  function printPDF(pdfUrl) {
    const newWindow = window.open(pdfUrl, "_blank");
    if (newWindow) {
      newWindow.onload = function () {
        newWindow.print();
      };
    } else {
      alert("Please allow popups for this website");
    }
  }
  const downloadInvoiceFile = () => {
    const invoiceData = {
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
      stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: "JPG", //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0, //negative or positive num, from the current position
        },
      },
      business: {
        name: "Business Name",
        address: "Albania, Tirane ish-Dogana, Durres 2001",
        phone: "(+355) 069 11 11 111",
        email: "email@example.com",
        email_1: "info@example.al",
        website: "www.example.al",
      },
      contact: {
        label: "Invoice issued for:",
        name: "Client Name",
        address: "Albania, Tirane, Astir",
        phone: "(+355) 069 22 22 222",
        email: "client@website.al",
        otherInfo: "www.website.al",
      },
      invoice: {
        label: "Invoice #: ",
        num: 19,
        invDate: "Payment Date: 01/01/2021 18:12",
        invGenDate: "Invoice Date: 02/02/2021 10:17",
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "Description",
            style: {
              width: 120,
            },
          },

          { title: "Net" },
          { title: "Vat" },
        ],
        table: Array.from(Array(2), (item, index) => [
          `Unlaminated Folded Leafets 
Qty: 5000, Paper Type: 130gsm Gloss Finish Paper, Size: A4 Landscape,Folding: Roll Folded to 6pp 1/3 A4, Sides Printed: Double Sided, On Express Turnaround
          `,
          "$100.00",
          "$0.00",
        ]),
        additionalRows: [
          {
            col1: "Total:",
            col2: "145,250.50",
            style: {
              fontSize: 14, //optional, default 12
            },
          },
          {
            col1: "VAT:",
            col2: "20",

            style: {
              fontSize: 10, //optional, default 12
            },
          },
          {
            col1: "SubTotal:",
            col2: "116,199.90",

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

    const url = jsPDFInvoiceTemplate(invoiceData);
    console.log(url);
    const print = URL.createObjectURL(url.blob);
    printPDF(print);
  };

  return (
    <button onClick={downloadInvoiceFile}>
      <IoPrint />
    </button>
  );
};

export default PrintInvoice;
