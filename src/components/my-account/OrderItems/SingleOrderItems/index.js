import Loader from "@/components/Loader/Loader";
import { useAuth } from "@/hooks/useAuth";
import { getSingleOrderItemsQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import OrderCard from "../../Order/SingleOrder/OrderCard";

const SingleOrderItemComponent = () => {
  const { session, isAuthenticated } = useAuth();
  const router = useRouter();
  const { order_items_id } = router.query;

  const { data, isLoading, isError, refetch, error } = useQuery({
    queryKey: ["single-order-item", order_items_id, session?.token],
    queryFn: () =>
      getSingleOrderItemsQuery({ order_items_id, token: session?.token }),
    enabled: !!order_items_id && !!session?.token,
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>{error.message}</div>
      ) : (
        data &&
        data?.data && (
          <OrderCard fullWidth item={data?.data} refetch={refetch} />
        )
      )}
    </div>
  );
};

export default SingleOrderItemComponent;
