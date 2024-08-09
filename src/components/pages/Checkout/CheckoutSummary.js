import Box from "@/components/ui/Box";
import LabAccordion from "@/components/ui/LabAccordion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { calculateTotal, formatPrice } from "@/lib/utils";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { VscDiffAdded } from "react-icons/vsc";

const OrderSummary = ({
  sub_total,
  total_vat,
  delivery_charge,
  artwork_charge,
  is_disable_button,
  handleCheckout,
  isCheckoutPending,
  total,
  next,
}) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  return (
    <Box boxTitle="Order Summary">
      <div className="px-5 mb-5 ">
        <div className="flex justify-between">
          <div className="order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              Sub total
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">VAT</p>

            <p className="py-1 text-base font-bold text-[#2B2B2B]">Total:</p>
          </div>
          <div className="text-right order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(sub_total)}
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(total_vat)}
            </p>

            <p className="py-1 text-base font-bold text-[#2B2B2B]">
              {formatPrice(total)}
            </p>
          </div>
        </div>
        {next === "checkout" ? (
          <Button
            className="w-full font-bold"
            onClick={() => {
              isAuthenticated
                ? router.push("/artwork")
                : router.push("/login?redirect_url=/artwork");
            }}
          >
            Proceed to Artwork
          </Button>
        ) : (
          <Button
            className="w-full font-bold"
            disabled={isCheckoutPending || is_disable_button}
            onClick={handleCheckout}
          >
            {isCheckoutPending ? "Processing..." : "Proceed to Payment"}
          </Button>
        )}
      </div>
    </Box>
  );
};

const MobileCheckoutSummary = ({
  artwork_charge,
  delivery_charge,
  sub_total,
  total,
  total_vat,
  isCheckoutPending,
  is_disable_button,
  handleCheckout,
  next,
}) => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 left-0 w-full px-2 bg-white border-t-2 shadow-sm lg:hidden order-info border-secondgraphy">
      <div className="px-5 mb-5 ">
        <div className="flex justify-between">
          <div className="order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              Sub total
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">VAT</p>

            <p className="py-1 text-base font-bold text-[#2B2B2B]">Total:</p>
          </div>
          <div className="text-right order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(sub_total)}
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(total_vat)}
            </p>

            <p className="py-1 text-base font-bold text-[#2B2B2B]">
              {formatPrice(total)}
            </p>
          </div>
        </div>
        {next === "checkout" ? (
          <Button
            className="w-full font-bold"
            onClick={() => {
              router.push("/artwork");
            }}
          >
            Proceed to Artwork
          </Button>
        ) : (
          <Button
            className="w-full font-bold disabled:opacity-50"
            disabled={isCheckoutPending || is_disable_button}
            onClick={handleCheckout}
          >
            {isCheckoutPending ? "Processing..." : "Proceed to Payment"}
          </Button>
        )}
      </div>
    </div>
  );
};

const CheckoutSummary = ({
  products,
  next = "checkout",
  handleCheckout,
  isCheckoutPending,
}) => {
  const {
    sub_total,
    total_vat,
    delivery_charge,
    artwork_charge,
    total,
    is_disable_button,
  } = useMemo(() => {
    const sub_total = products
      .map((product) => parseFloat(product.total))
      .reduce((a, b) => a + b, 0);
    const total_vat = products
      .map((product) => parseFloat(product.tax))
      .reduce((a, b) => a + b, 0);

    const total = sub_total + total_vat;
    const is_disable_button = products.length === 0;
    return {
      sub_total,
      total_vat,
      total,
      is_disable_button: is_disable_button,
    };
  }, [products]);

  return (
    <div className="w-full ">
      <div className="hidden lg:block">
        <OrderSummary
          artwork_charge={artwork_charge}
          delivery_charge={delivery_charge}
          sub_total={sub_total}
          total={total}
          is_disable_button={is_disable_button}
          total_vat={total_vat}
          handleCheckout={handleCheckout}
          isCheckoutPending={isCheckoutPending}
          next={next}
        />
      </div>

      {/*  <div className="mb-5 ">
        <div className="border rounded ">
          <LabAccordion title="Add  Discount Code">
            <div className="mt-5 mb-5">
              <form className="border rounded-md">
                <input
                  className=" border-none px-1 rounded-s-md w-[70%] py-1 "
                  type="text"
                  placeholder="Enter code"
                />
                <Button className="w-[30%] font-bold">Apply</Button>
              </form>
            </div>
          </LabAccordion>
        </div>
      </div>
      <div>
        <button className="w-full py-1 text-base font-bold text-center text-white border rounded-md bg-secondgraphy ">
          Countinus Shopping{" "}
        </button>
      </div> */}
      <MobileCheckoutSummary
        artwork_charge={artwork_charge}
        delivery_charge={delivery_charge}
        sub_total={sub_total}
        is_disable_button={is_disable_button}
        total={total}
        total_vat={total_vat}
        handleCheckout={handleCheckout}
        isCheckoutPending={isCheckoutPending}
        next={next}
      />
    </div>
  );
};

export default CheckoutSummary;
