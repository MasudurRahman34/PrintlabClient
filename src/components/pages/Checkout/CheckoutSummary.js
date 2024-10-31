import Box from "@/components/ui/Box";
import LabAccordion from "@/components/ui/LabAccordion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { calculateTotal, formatPrice } from "@/lib/utils";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { VscDiffAdded } from "react-icons/vsc";
import DiscountCode from "./DiscountCode";

const OrderSummary = ({
  sub_total,
  total_vat,
  delivery_charge,
  artwork_charge,
  discount_price,

  is_disable_button,
  handleCheckout,
  isCheckoutPending,
  total,
  next,
}) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { discount_type, discount, discount_code } = router.query;

  const link =
    discount_code && discount_type && discount
      ? `?discount_type=${discount_type}&discount=${discount}&discount_code=${discount_code}`
      : "";

  return (
    <Box boxTitle="Order Summary">
      <div className="px-5 mb-5 ">
        <div className="flex justify-between">
          <div className="order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              Sub total
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">VAT</p>
            {discount_price ? (
              <p className="py-1 text-sm font-bold text-[#2B2B2B] ">Discount</p>
            ) : null}

            <p className="py-1 text-base font-bold text-[#2B2B2B]">Total:</p>
          </div>
          <div className="text-right order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(sub_total)}
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(total_vat)}
            </p>
            {discount_price ? (
              <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
                -{formatPrice(discount_price)}
              </p>
            ) : null}

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
                ? router.push("/artwork" + link)
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
  isAuthenticated,
  sub_total,
  discount_price,
  total,
  total_vat,
  isCheckoutPending,
  is_disable_button,
  handleCheckout,
  next,
}) => {
  const router = useRouter();

  const { discount_type, discount, discount_code } = router.query;

  const link =
    discount_code && discount_type && discount
      ? `?discount_type=${discount_type}&discount=${discount}&discount_code=${discount_code}`
      : "";
  return (
    <div className="fixed bottom-0 left-0 w-full px-2 bg-white border-t-2 shadow-sm lg:hidden order-info border-secondgraphy">
      <div className="px-5 mb-5 ">
        <div className="flex justify-between">
          <div className="order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              Sub total
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">VAT</p>
            {discount_price ? (
              <p className="py-1 text-sm font-bold text-[#2B2B2B] ">Discount</p>
            ) : null}

            <p className="py-1 text-base font-bold text-[#2B2B2B]">Total:</p>
          </div>
          <div className="text-right order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(sub_total)}
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
              {formatPrice(total_vat)}
            </p>
            {discount_price ? (
              <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
                -{formatPrice(discount_price)}
              </p>
            ) : null}

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
                ? router.push("/artwork" + link)
                : router.push("/login?redirect_url=/artwork");
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
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { discount_type, discount } = router.query;

  const {
    sub_total,
    total_vat,
    delivery_charge,
    artwork_charge,
    total,

    discount_price,
    is_disable_button,
  } = useMemo(() => {
    const sub_total = products
      .map((product) => parseFloat(product.total))
      .reduce((a, b) => a + b, 0);
    const total_vat = products
      .map((product) => parseFloat(product.tax))
      .reduce((a, b) => a + b, 0);

    const intDiscount = parseInt(discount);

    const discount_price =
      discount_type === "percentage"
        ? (sub_total * intDiscount) / 100
        : intDiscount;

    const total = sub_total + total_vat - (discount_price ? discount_price : 0);
    const is_disable_button = products.length === 0;
    return {
      sub_total,
      total_vat,
      total,
      is_disable_button: is_disable_button,
      discount_price,
    };
  }, [products, discount, discount_type]);

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
          discount_price={discount_price}
          next={next}
        />
      </div>

      <div className="mb-5 ">
        <div className="border rounded ">
          <LabAccordion title="Add  Discount Code">
            <DiscountCode />
          </LabAccordion>
        </div>
      </div>

      <MobileCheckoutSummary
        artwork_charge={artwork_charge}
        delivery_charge={delivery_charge}
        sub_total={sub_total}
        is_disable_button={is_disable_button}
        total={total}
        discount_price={discount_price}
        total_vat={total_vat}
        handleCheckout={handleCheckout}
        isAuthenticated={isAuthenticated}
        isCheckoutPending={isCheckoutPending}
        next={next}
      />
    </div>
  );
};

export default CheckoutSummary;
