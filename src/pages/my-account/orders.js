import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import Button from "@/components/ui/button";
import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Orders = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Orders">
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
                  <Label htmlFor="terms">
                    Display orders form our old website
                  </Label>
                </div>
              </div>
            </div>
            <table className="w-full border border-collapse border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200">Order #</th>
                  <th className="border border-gray-200">Date</th>
                  <th className="border border-gray-200">Status</th>
                  <th className="border border-gray-200">Total</th>
                  <th className="border border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center border border-gray-200">1</td>
                  <td className="text-center border border-gray-200">
                    20/10/2021
                  </td>
                  <td className="text-center border border-gray-200">
                    Pending
                  </td>
                  <td className="text-center border border-gray-200">$100</td>
                  <td className="text-center border border-gray-200">
                    <Button>View</Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-200">2</td>
                  <td className="text-center border border-gray-200">
                    20/10/2021
                  </td>
                  <td className="text-center border border-gray-200">
                    Pending
                  </td>
                  <td className="text-center border border-gray-200">$100</td>
                  <td className="text-center border border-gray-200">
                    <Button>View</Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-200">3</td>
                  <td className="text-center border border-gray-200">
                    20/10/2021
                  </td>
                  <td className="text-center border border-gray-200">
                    Pending
                  </td>
                  <td className="text-center border border-gray-200">$100</td>
                  <td className="text-center border border-gray-200">
                    <Button>View</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AccountLayout>
    </ClientLayout>
  );
};

export default Orders;
