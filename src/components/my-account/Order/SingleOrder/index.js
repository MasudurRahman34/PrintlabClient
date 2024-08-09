import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderCard from "./OrderCard";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getSingleOrderQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

const SingleOrderComponent = () => {
  const { isAuthenticated, session } = useAuth();
  const router = useRouter();
  const { order_id } = router.query;

  const { data, isLoading, isError, refetch, isSuccess, error } = useQuery({
    queryKey: ["single_order", session?.token, order_id],
    queryFn: () => getSingleOrderQuery({ token: session?.token, order_id }),
    enabled: !!session?.token && !!order_id,
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <div>
          {isLoading ? (
            <Loader />
          ) : isSuccess && data ? (
            data?.data.order_items.map((item) => (
              <OrderCard
                key={item.id}
                item={item}
                fullWidth
                refetch={refetch}
              />
            ))
          ) : (
            <p>No Items found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrderComponent;
