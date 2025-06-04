import React from "react";
import { SectionHeader, GenericCard } from "@/components/reusables";
import { AccountInfo, Details } from "@/components/account-details";
import {
  PlusCircle,
  MinusCircle,
  ArrowLeftRight,
  FileText,
} from "lucide-react";
import TinyCards from "@/components/account-details/tiny-cards";

const AccountDetails = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-8">
      <SectionHeader
        title="Account Details"
        description="View and manage your account information"
      />
      <GenericCard cardTitle="" showButton={false}>
        <AccountInfo />
        <Details />
      </GenericCard>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <TinyCards Title="Deposit" Icon={<PlusCircle className="text-green-600" />} />
        <TinyCards Title="Withdrawal" Icon={<MinusCircle className="text-red-600" />} />
        <TinyCards Title="Transfer" Icon={<ArrowLeftRight className="text-blue-600" />} />
        <TinyCards Title="Statement" Icon={<FileText className="text-gray-600" />} />
      </div>
    </div>
  );
};

export default AccountDetails;
