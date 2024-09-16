import { PDFDocument } from "pdf-lib";

export const checkPdfFile = async (file, checkType) => {
  try {
    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const numPages = pdfDoc.getPageCount();
    const pages = pdfDoc.getPages();

    let checkResult = false;

    const SIZES = {
      A2: { width: 1190.55, height: 1683.78 },
      A3: { width: 841.89, height: 1190.55 },
      A4: { width: 595.28, height: 841.89 },
      Letter: { width: 612, height: 792 },
      A5: { width: 419.53, height: 595.28 },
    };

    async function bleedLeftAround(page) {
      const bleedBox = await page.getBleedBox();
      const trimBox = await page.getTrimBox();

      // Calculate the actual bleed
      const actualBleedLeft = trimBox.x - bleedBox.x;
      const actualBleedBottom = trimBox.y - bleedBox.y;
      const actualBleedRight =
        bleedBox.x + bleedBox.width - (trimBox.x + trimBox.width);
      const actualBleedTop =
        bleedBox.y + bleedBox.height - (trimBox.y + trimBox.height);

      return {
        actualBleedLeft,
        actualBleedBottom,
        actualBleedRight,
        actualBleedTop,
      };
    }

    // Function to check if a page is of exact size
    const isExactSize = async (page, size) => {
      const { width, height } = page.getSize();
      const aproxBleed = 5 * 15;

      const portraitCheck =
        Math.abs(width - size.width) <= aproxBleed &&
        Math.abs(height - size.height) <= aproxBleed;
      const landscapeCheck =
        Math.abs(width - size.height) <= aproxBleed &&
        Math.abs(height - size.width) <= aproxBleed;

      return portraitCheck || landscapeCheck;
    };

    const pageChecker = async (size) => {
      const tempResults = [];

      for (let i = 0; i < numPages; i++) {
        const page = pages[i];
        const sizeCheck = await isExactSize(page, size);
        tempResults.push(sizeCheck);
      }

      return tempResults.every((result) => result === true);
    };

    // Function to check bleed on a single page
    async function checkBleed(page) {
      // Example: Expecting a 3mm bleed (assuming the dimensions are in points)
      const expectedBleed = 3; // 3mm in points

      const {
        actualBleedLeft,
        actualBleedBottom,
        actualBleedRight,
        actualBleedTop,
      } = await bleedLeftAround(page);

      const hasCorrectBleed =
        actualBleedLeft >= expectedBleed &&
        actualBleedBottom >= expectedBleed &&
        actualBleedRight >= expectedBleed &&
        actualBleedTop >= expectedBleed;

      return hasCorrectBleed;
    }

    switch (checkType) {
      case "A2check":
        checkResult = await pageChecker(SIZES.A2);
        break;

      case "A3check":
        checkResult = await pageChecker(SIZES.A3);
        break;

      case "A4check":
        checkResult = await pageChecker(SIZES.A4);
        break;

      case "A5check":
        checkResult = await pageChecker(SIZES.A5);
        break;

      case "Lettercheck":
        checkResult = await pageChecker(SIZES.Letter);
        break;
      case "Bleed":
        // Check if no page in the PDF has a size smaller than standard sizes minus 18 points
        const tempResults = [];

        for (let i = 0; i < numPages; i++) {
          const page = pages[i];
          const bleedCheck = await checkBleed(page);
          tempResults.push(bleedCheck);
        }

        checkResult = tempResults.every((result) => result === true);

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
