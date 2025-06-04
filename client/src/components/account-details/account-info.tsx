import React from "react";
import { Badge } from "@/components/reusables";

const AccountInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <div className="flex items-center gap-x-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Savings Account
          </h3>
          <Badge text="Active" />
        </div>
        <p className="text-gray-600 mt-1">Account #: **** **** **** 9012</p>
      </div>
      <div className="mt-4 md:mt-0">
        <div className="text-3xl font-bold text-gray-800">$45,678.90</div>
        <p className="text-green-600 text-sm">+$1,250.00 (30 days)</p>
      </div>
    </div>
  );
};

export default AccountInfo;
