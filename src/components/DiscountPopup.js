import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { getDiscountCouponQuery } from "@/resolvers/query";

const DiscountPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { data, isError } = useQuery({
    queryKey: ["get_discount_coupon"],
    queryFn: getDiscountCouponQuery,
  });

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      if (data?.data) {
        const isSessionExists = sessionStorage.getItem("showPopup");
        if (!isSessionExists) {
          setShowPopup(true);
          sessionStorage.setItem("showPopup", true);
        }
      }
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [data?.data]); // Empty dependency array ensures the effect runs only once

  if (!showPopup) {
    return null;
  }

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent>
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl text-center md:text-4xl">
            Thanks for visiting
          </DialogTitle>
          {isError ? (
            <DialogDescription className="text-lg">
              We&apos;re sorry, but we couldn&apos;t load the discount coupon at
              this time.
            </DialogDescription>
          ) : (
            data?.data?.data?.map((item) => (
              <DialogDescription className="text-center" key={item.id}>
                We&apos;ll give you a {item.percent_off}% discount on your first
                order. Use code
                <strong> {item.id}</strong> at checkout.
              </DialogDescription>
            ))
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
