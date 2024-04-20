import Box from "@/components/ui/Box";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PriceVatPreference = () => {
  return (
    <Box boxTitle="Price Vat Preference">
      <div className="flex items-center gap-2 px-4 py-3 text-sm border-b border-primary md:text-base">
        <h1 className="w-full max-w-[200px] font-bold">Price Vat Preference</h1>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="just_print">Just Print</SelectItem>
            <SelectItem value="file_check">File Check</SelectItem>
            <SelectItem value="file_check-with_profing">
              File Check with Profing{" "}
            </SelectItem>
            <SelectItem value="file_asist">File Asist</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Box>
  );
};

export default PriceVatPreference;
