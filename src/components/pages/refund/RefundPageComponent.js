import Loader from "@/components/Loader/Loader";
import React from "react";
import RefundTable from "./RefundTable";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getRefundQuery } from "@/resolvers/query";
import ApplyForRefund from "./ApplyForRefund";

const RefundPageComponent = () => {
  const { session } = useAuth();
  const [current_page, setCurrentPage] = React.useState(1);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["refunds", session?.token, current_page],
    queryFn: () =>
      getRefundQuery({ token: session?.token, page: current_page }),
    enabled: !!session?.token && !!current_page,
  });

  const paginationFn = ({ page }) => {
    setCurrentPage(page);
    refetch();
  };

  return (
    <div>
      {/*  <div>
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
  </div> */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Refunds</h1>
        <div>
          <ApplyForRefund refetch_refund={refetch} />
        </div>
      </div>
      <div className="overflow-x-auto">
        {/* <div className="flex items-center justify-between py-3">
      <Link href="#" className="hover:underline">
        Show all
      </Link>
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Display orders form our old website</Label>
        </div>
      </div>
    </div> */}
        <div className="mt-4">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <p>You do not have any refund request yet </p>
          ) : data?.data.length > 0 ? (
            <>
              <RefundTable refunds={data?.data} />
              <Pagination meta={data?.meta} paginationFn={paginationFn} />
            </>
          ) : (
            <p>You do not have refund request yet </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RefundPageComponent;
