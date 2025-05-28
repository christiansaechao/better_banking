import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDropdown = ({
  title,
  items,
  handleChange
}: {
  title: string;
  items: string[];
  handleChange: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2>{title}</h2>
      <Select defaultValue={items[0]} onValueChange={(value) => handleChange(value)}>
        <SelectTrigger className="w-full border-2 border-gray-700">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropdown;