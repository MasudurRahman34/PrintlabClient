import React from "react";
import jsPDFInvoiceTemplate from "jspdf-invoice-template";

import { FaDownload } from "react-icons/fa";

const DownloadInvoice = ({ invoiceGeneratedObj }) => {
  const downloadInvoiceFile = () => {
    const modifiedInvoiceGeneratedObj = {
      ...invoiceGeneratedObj,
      outputType: "save",
    };

    if (typeof window !== "undefined") {
      jsPDFInvoiceTemplate(modifiedInvoiceGeneratedObj);
    }
  };

  return (
    <button>
      <FaDownload onClick={downloadInvoiceFile} />
    </button>
  );
};

export default DownloadInvoice;
