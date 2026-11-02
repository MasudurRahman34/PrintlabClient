import Providers from "./providers";

import "@/styles/globals.css";
import "swiper/css/bundle";
import "@/styles/product_slide.css";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/embla_product_carousel.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-medium-image-zoom/dist/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";

export const metadata = {
  title: "weareprintlab",
  description:
    "We are a print lab that offers a wide range of printing services. We offer custom printing services for mugs, t-shirts, hoodies, and more.",
  keywords: "print lab, custom printing, printing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
