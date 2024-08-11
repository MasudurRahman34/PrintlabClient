import { PDFDocument } from "pdf-lib";

export const checkPdfFile = async (file, checkType) => {
  try {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const numPages = await pdfDoc.getPageCount();
    const pages = await pdfDoc.getPages();

    let checkResult = false;

    const SIZES = {
      A2: { width: 1190.55, height: 1683.78 },
      A3: { width: 841.89, height: 1190.55 },
      A4: { width: 595.28, height: 841.89 },
      Letter: { width: 612, height: 792 },
      A5: { width: 419.53, height: 595.28 },
    };

    // Function to check if a page is of exact size
    const isExactSize = (page, size) => {
      const { width, height } = page.getSize();

      return (
        Math.abs(width - size.width) < 1 && Math.abs(height - size.height) < 1
      );
    };

    // Function to check bleed on a single page
    async function checkBleed(page) {
      const bleedBox = await page.getBleedBox();
      const trimBox = await page.getTrimBox();

      // Example: Expecting a 3mm bleed (assuming the dimensions are in points)
      const expectedBleed = 8.5; // 3mm in points

      // Calculate the actual bleed
      const actualBleedLeft = trimBox.x - bleedBox.x;
      const actualBleedBottom = trimBox.y - bleedBox.y;
      const actualBleedRight =
        bleedBox.x + bleedBox.width - (trimBox.x + trimBox.width);
      const actualBleedTop =
        bleedBox.y + bleedBox.height - (trimBox.y + trimBox.height);

      const hasCorrectBleed =
        actualBleedLeft >= expectedBleed &&
        actualBleedBottom >= expectedBleed &&
        actualBleedRight >= expectedBleed &&
        actualBleedTop >= expectedBleed;

      return hasCorrectBleed;
    }

    switch (checkType) {
      case "A2check":
        checkResult = pdfDoc
          .getPages()
          .every((page) => isExactSize(page, SIZES.A2));
        break;

      case "A3check":
        checkResult = pdfDoc
          .getPages()
          .every((page) => isExactSize(page, SIZES.A3));
        break;

      case "A4check":
        checkResult = pdfDoc
          .getPages()
          .every((page) => isExactSize(page, SIZES.A4));
        break;

      case "A5check":
        checkResult = pdfDoc
          .getPages()
          .every((page) => isExactSize(page, SIZES.A5));
        break;

      case "Lettercheck":
        checkResult = pdfDoc
          .getPages()
          .every((page) => isExactSize(page, SIZES.Letter));
      case "Bleed":
        // Check if no page in the PDF has a size smaller than standard sizes minus 18 points
        const tempResults = [];

        for (let i = 0; i < numPages; i++) {
          const page = pages[i];
          const bleedCheck = await checkBleed(page);
          tempResults.push(bleedCheck);
        }

        checkResult = tempResults.every((result) => result);
        return checkResult;

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
