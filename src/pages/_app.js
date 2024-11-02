import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

import "react-medium-image-zoom/dist/styles.css";

import { Toaster } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import DiscountPopup from "@/components/DiscountPopup";

export default function App({ Component, pageProps }) {
  const { isAuthenticated, user, token } = useAuth();

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component
        {...pageProps}
        isAuthenticated={isAuthenticated}
        user={user}
        token={token}
      />
      {/*  <ReactQueryDevtools initialIsOpen={false} position="right" /> */}
      <Toaster />
      <DiscountPopup />
    </QueryClientProvider>
  );
}
