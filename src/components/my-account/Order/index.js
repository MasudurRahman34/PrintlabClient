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
import OrderTable from "./OrderTable";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { getOrdersQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

const OrderComponent = () => {
  const { session } = useAuth();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["orders", session?.token],
    queryFn: () => getOrdersQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  console.log(data);

  return (
    <div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900 sr-only"
        >
          Price
        </label>
        <div className="relative mt-2 overflow-hidden rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 pointer-events-none bg-primary">
            <span className="text-gray-500 sm:text-sm">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full pr-20 text-secondgraphy border-0 rounded-md py-2.5 pl-12 ring-1 ring-inset ring-primary placeholder:text-typography focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 placeholder:uppercase"
            placeholder="Search by item #, Customer Ref, Po Number or item Name"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="w-full h-full px-5 font-bold bg-primary text-secondgraphy">
              {" "}
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 py-5 md:flex-row">
        <div className="flex items-center justify-between flex-1 w-full gap-5">
          <div>
            <p>
              <span>0</span> orders placed in
            </p>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1 w-full gap-5">
          <div>
            <p>Filter By</p>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between py-3">
          <Link href="#" className="hover:underline">
            Show all
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Display orders form our old website</Label>
            </div>
          </div>
        </div>
        <div>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <p>You do not have any orders Yet </p>
          ) : data?.data.length > 0 ? (
            <OrderTable orders={data?.data} />
          ) : (
            <p>You do not have any orders Yet </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
