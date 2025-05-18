import React from "react";
import ComponentHeader from "@/components/component-header/component-header";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import Alerts from "@/components/dashboard/alerts";
import ThreeCards from "@/components/dashboard/three-cards";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <ComponentHeader title="Dashboard" user="John Doe" />
      <ThreeCards />
      <RecentTransactions />
      <div className="w-1/3">
        <Alerts />
      </div>
    </div>
  );
};

export default Dashboard;
