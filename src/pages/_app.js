import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/styles/globals.css";
//import "@/styles/style.css";
import "swiper/css/bundle";
//import "@/styles/hero_slides.css";
import "@/styles/product_slide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import carousel css
import "@/styles/embla_product_carousel.css";

import "react-datepicker/dist/react-datepicker.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  );
}
