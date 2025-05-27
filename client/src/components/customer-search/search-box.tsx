import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectDropdown } from "@/components/reusables/select-dropdown";

import type { SearchParams } from "@/types/searchParams";

type Props = {
  handleSearch: (params: SearchParams) => void;
};

const SearchBox = ({ handleSearch }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchType, setSearchType] = React.useState("All");
  const [accountType, setAccountType] = React.useState("All");
  const [accountStatus, setAccountStatus] = React.useState("All");

  const onSearch = () => {
    handleSearch({ searchType, searchTerm, accountType, accountStatus });
  };

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardContent>
          <Input
            placeholder="Search for a customer"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="w-full grid grid-cols-3 gap-4 mt-4">
            <SelectDropdown
              title="Search Type"
              items={[
                "All",
                "Name",
                "Account Number",
                "Phone Number",
                "Customer ID",
                "SSN (Last 4)",
              ]}
              handleChange={setSearchType}
            />
            <SelectDropdown
              title="Account Type"
              items={[
                "All",
                "Checking",
                "Savings",
                "Mortagage",
                "Loan",
                "Credit Card",
              ]}
              handleChange={setAccountType}
            />
            <SelectDropdown
              title="Account Status"
              items={[
                "All",
                "Active",
                "Inactive",
                "Closed",
                "Suspended",
                "Overdrafted",
              ]}
              handleChange={setAccountStatus}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button type="button">Clear</Button>
          <Button type="button" onClick={onSearch}>
            Search
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SearchBox;
