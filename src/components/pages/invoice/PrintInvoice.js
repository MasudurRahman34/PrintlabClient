import React from "react";
import jsPDFInvoiceTemplate from "jspdf-invoice-template";
import {} from "jspdf-invoice-template";
import { IoPrint } from "react-icons/io5";

const PrintInvoice = ({ invoiceGeneratedObj }) => {
  function printPDF(pdfUrl) {
    if (window !== undefined) {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = pdfUrl;
      document.body.appendChild(iframe);
      iframe.contentWindow.print();
    }
  }
  const downloadInvoiceFile = () => {
    if (typeof window !== "undefined") {
      const url = jsPDFInvoiceTemplate(invoiceGeneratedObj);

      const print = URL.createObjectURL(url.blob);
      printPDF(print);
      /* jsPDFInvoiceTemplate(invoiceData, (pdf) => {
        const pdfBlob = pdf.output("blob");
        const pdfUrl = URL.createObjectURL(pdfBlob);
        printPDF(pdfUrl);
      }); */
      /*  jsPDFInvoiceTemplate(invoiceData).then((pdf) => {
        const pdfUrl = URL.createObjectURL(pdf);
        printPDF(pdfUrl);
      }); */
    }
  };

  return (
    <button onClick={downloadInvoiceFile}>
      <IoPrint />
    </button>
  );
};

export default PrintInvoice;
