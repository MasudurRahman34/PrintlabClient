import { PDFDocument } from "pdf-lib";

export const checkPdfFile = async (file, checkType) => {
  try {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const numPages = pdfDoc.getPageCount();

    let checkResult = false;

    const SIZES = {
      A4: { width: 595.28, height: 841.89 },
      Letter: { width: 612, height: 792 },
      A5: { width: 419.53, height: 595.28 },
    };
    const MIN_BLEED = 18;

    switch (checkType) {
      case "A4":
        // Check if all pages in the PDF are A4 size (595.28 x 841.89 points)
        checkResult = pdfDoc.getPages().every((page) => {
          const { width, height } = page.getSize();
          return (
            Math.abs(width - SIZES.A4.width) < 1 &&
            Math.abs(height - SIZES.A4.height) < 1
          );
        });
        break;

      case "Bleed":
        // Check if no page in the PDF has a size smaller than standard sizes minus 18 points
        checkResult = pdfDoc.getPages().every((page) => {
          const { width, height } = page.getSize();
          return (
            width >= SIZES.A4.width - MIN_BLEED &&
            height >= SIZES.A4.height - MIN_BLEED &&
            width >= SIZES.Letter.width - MIN_BLEED &&
            height >= SIZES.Letter.height - MIN_BLEED &&
            width >= SIZES.A5.width - MIN_BLEED &&
            height >= SIZES.A5.height - MIN_BLEED
          );
        });
        break;

      case "singleSided":
        // Check if the PDF is single-sided (total page count should be 1)
        checkResult = numPages === 1;
        break;

      case "doubleSided":
        // Check if the PDF is double-sided (total page count should be more than 1)
        checkResult = numPages > 1;
        break;

      default:
        throw new Error("Invalid check type");
    }

    return checkResult;
  } catch (error) {
    console.error("Error checking PDF type:", error);
    return false;
  }
};
