import React, { useState } from "react";
import { supabase } from "@/lib/client";
import SearchBox from "@/components/customer-search/search-box";
import ComponentHeader from "@/components/reusables/component-header";
import SearchResults from "@/components/customer-search/search-results";
import type { SearchParams } from "@/types/searchParams";

const CustomerSearch = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>([]);

  const getUsersData = async ({
    searchType,
    searchTerm,
    accountType,
    accountStatus,
  }: SearchParams) => {
    try {
      const { data, error } = await supabase.from("users").select("*");

      if (error) throw error;

      // Optional: Filter on client side if no server-side filtering is implemented
      setUserData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearch = (params: SearchParams) => {
    getUsersData(params);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-4 p-8">
      <ComponentHeader
        title="Customer Search"
        description="Find customer accounts and information"
      />
      <SearchBox handleSearch={handleSearch} />
      <SearchResults customerData={userData} />
    </div>
  );
};

export default CustomerSearch;
