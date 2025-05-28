import React from "react";
import { SectionHeader, GenericCard, Tabs } from "@/components/reusables";
import {
  CustomerDetails,
  CustomerPersonalDetails,
} from "@/components/customer-profile";
import { Button } from "@/components/ui/button";

const CustomerProfile = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-8">
      <div className="flex flex-row justify-between items-start w-full gap-4">
        <SectionHeader
          title="Customer Profile"
          description="View and manage customer information"
        />
        <Button>Edit Profile</Button>
      </div>
      <GenericCard cardTitle="" showButton={false}>
        <div className="flex flex-row gap-4">
          <CustomerDetails />
          <CustomerPersonalDetails />
        </div>
      </GenericCard>
      <Tabs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <GenericCard cardTitle="Account Summary" showButton={false}>
          Chart Goes here
        </GenericCard>
        <GenericCard cardTitle="Recent Transactions" showButton={false}>
          Table goes here
        </GenericCard>
      </div>
    </div>
  );
};

export default CustomerProfile;
