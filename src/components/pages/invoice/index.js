import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getOrdersQuery } from "@/resolvers/query";
import { useAuth } from "@/hooks/useAuth";
import Loader from "@/components/Loader/Loader";
import InvoiceRow from "./InvoiceRow";
import Pagination from "@/components/Pagination";

const InvoiceComponent = () => {
  const { session } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [current_page, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["orders", session?.token, current_page],
    queryFn: () =>
      getOrdersQuery({ token: session?.token, page: current_page }),
    enabled: !!session?.token && !!current_page,
  });

  const paginationFn = ({ page }) => {
    setCurrentPage(page);
    refetch();
  };

  return (
    <div>
      {/* <div>
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
          <div className="flex items-center justify-between">
            <div>
              <span>From</span>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div>
              <span>To</span>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          <div>
            <Button>Filter</Button>
          </div>
        </div>
      </div> */}
      <div className="overflow-x-auto">
        {/*  <div className="flex items-center justify-between py-3">
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

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>{error.message}</div>
        ) : data && data?.data.length > 0 ? (
          <>
            {" "}
            <table className="w-full border border-collapse border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    SL
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Order NO.
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Total
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((item, idx) => (
                  <InvoiceRow key={item.id} item={item} idx={idx} />
                ))}
              </tbody>
            </table>
            <Pagination meta={data.meta} paginationFn={paginationFn} />
          </>
        ) : (
          <p>You do not have any Payment Yet </p>
        )}
      </div>
    </div>
  );
};
export default InvoiceComponent;
