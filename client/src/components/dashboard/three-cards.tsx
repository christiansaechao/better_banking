import React from "react";
import { Link } from "react-router-dom";
import { GenericCard } from "@/components/dashboard/card";
import { Button } from "@/components/ui/button";
import { Search, PlusIcon, ArrowLeftRight, Banknote } from "lucide-react";
const ThreeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <GenericCard cardTitle="Quick Actions" showButton={false}>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col p-1 bg-blue-300/15 rounded-sm justify-center items-center">
            <Search />
            Search
          </div>
          <div className="flex flex-col p-1 bg-green-300/15 rounded-sm justify-center items-center">
            <PlusIcon />
            New Account
          </div>
          <div className="flex flex-col p-1 bg-purple-300/15 rounded-sm justify-center items-center">
            <ArrowLeftRight />
            Transfer
          </div>
          <div className="flex flex-col p-1 bg-yellow-100/15 rounded-sm justify-center items-center">
            <Banknote />
            Deposit
          </div>
        </div>
      </GenericCard>
      <GenericCard cardTitle="Cash Drawer Status" showButton={false}>
        <div className="flex flex-row justify-between">
          <div>
            <p>Current Balance:</p>
            <p>Starting Balance:</p>
            <p>Difference:</p>
          </div>
          <div>
            <p>$5,000.00</p>
            <p>$5,000.00</p>
            <p>+$250.00</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <Button type="button" className="text-white bg-[#646cff] p-2 w-full">
            <Link to="/cash-drawer" className="text-white no-underline">
              Balance Drawer
            </Link>
          </Button>
        </div>
      </GenericCard>
      <GenericCard cardTitle="Today's Activities" showButton={false}>
        <div className="flex flex-row justify-between">
          <div>
            <p>Transactions:</p>
            <p>Deposits:</p>
            <p>Withdrawals:</p>
          </div>
          <div>
            <p>78</p>
            <p>45</p>
            <p>33</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <Button type="button" className="text-white bg-[#646cff] p-2 w-full">
            <Link to="/transactions" className="text-white no-underline">
              View All
            </Link>
          </Button>
        </div>
      </GenericCard>
    </div>
  );
};

export default ThreeCards;
