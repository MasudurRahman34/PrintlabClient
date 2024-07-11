import React, { useState } from "react";
import NewAddressForm from "./NewAddressForm";
import { useQuery } from "@tanstack/react-query";
import { getDeliveryAddressQuery } from "@/resolvers/query";
import { useAuth } from "@/hooks/useAuth";

const DeliveryItems = ({ item }) => {
  const { isAuthenticated, session } = useAuth();
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["get-address", session?.token],
    queryFn: () => getDeliveryAddressQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  return (
    <div>
      {showNewAddressForm && <NewAddressForm />}
      <div>
        <div>
          <p>
            Laminated Flyers delivery by 26/07/2024 Qty: 50, Paper Type: 350gsm
            Silk Finish Paper, Size: A7, Lamination: Both Sides (Matt), Sides
            Printed: Single Sided, On Saver Turnaround
          </p>
        </div>
        <div>
          <h1 className="font-bold text-secondgraphy">
            Select Existing Address*
          </h1>
          <select name="address" id="address"></select>
        </div>
      </div>
    </div>
  );
};

export default DeliveryItems;
