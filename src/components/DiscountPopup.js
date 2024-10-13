import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DiscountPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      const isSessionExists = sessionStorage.getItem("showPopup");
      if (!isSessionExists) {
        setShowPopup(true);
        sessionStorage.setItem("showPopup", true);
      }
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

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
          <DialogDescription className="text-center">
            We`&apos;`4ll give you a 10% discount on your first order. Use code
            <strong> {"rCEfIeaEd"}</strong> at checkout.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
