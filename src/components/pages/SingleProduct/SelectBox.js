import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectBox = ({ attribute_id, title, options, handleSelect }) => {
  const handleChange = (value) => {
    handleSelect({ attribute_id, attribute_option_id: value });
  };
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="w-1/3">
        <strong>{title}</strong>
      </div>
      <div className="w-2/3">
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Please Select" value />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option, index) => (
                <SelectItem key={index} value={option.attribute_option_id}>
                  {option.attributeOption.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectBox;
