import { PDFDocument } from "pdf-lib";

export const checkPdfFile = async (file, checkType) => {
  try {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const numPages = pdfDoc.getPageCount();

    let checkResult = false;

    const SIZES = {
      A2: { width: 1190.55, height: 1683.78 },
      A3: { width: 841.89, height: 1190.55 },
      A4: { width: 595.28, height: 841.89 },
      Letter: { width: 612, height: 792 },
      A5: { width: 419.53, height: 595.28 },
    };
    const MIN_BLEED = 18;

    const hasBleedMargin = (page, size) => {
      const { width, height } = page.getSize();
      console.log(size.width + MIN_BLEED, width);

      return (
        width >= size.width + MIN_BLEED && height >= size.height + MIN_BLEED
      );
    };

    switch (checkType) {
      case "A2":
        // Check if all pages in the PDF are A2 size (1190.55 x 1683.78 points)
        checkResult = pdfDoc.getPages().every((page) => {
          const { width, height } = page.getSize();
          return (
            Math.abs(width - SIZES.A2.width) < 1 &&
            Math.abs(height - SIZES.A2.height) < 1
          );
        });
        break;

      case "A3":
        // Check if all pages in the PDF are A3 size (841.89 x 1190.55 points)
        checkResult = pdfDoc.getPages().every((page) => {
          const { width, height } = page.getSize();
          return (
            Math.abs(width - SIZES.A3.width) < 1 &&
            Math.abs(height - SIZES.A3.height) < 1
          );
        });
        break;
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

      case "A5":
        // Check if all pages in the PDF are A5 size (419.53 x 595.28 points)
        checkResult = pdfDoc.getPages().every((page) => {
          const { width, height } = page.getSize();
          return (
            Math.abs(width - SIZES.A5.width) < 1 &&
            Math.abs(height - SIZES.A5.height) < 1
          );
        });
        break;

      case "Letter":
        // Check if all pages in the PDF are Letter size (612 x 792 points)
        checkResult = pdfDoc.getPages().every((page) => {
          const { width, height } = page.getSize();
          console.log(width, height);

          return (
            Math.abs(width - SIZES.Letter.width) < 1 &&
            Math.abs(height - SIZES.Letter.height) < 1
          );
        });
        break;

      case "Bleed":
        // Check if no page in the PDF has a size smaller than standard sizes minus 18 points
        checkResult = pdfDoc
          .getPages()
          .every(
            (page) =>
              hasBleedMargin(page, SIZES.A4) ||
              hasBleedMargin(page, SIZES.Letter) ||
              hasBleedMargin(page, SIZES.A5) ||
              hasBleedMargin(page, SIZES.A3) ||
              hasBleedMargin(page, SIZES.A2)
          );

        console.log(checkResult);

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
