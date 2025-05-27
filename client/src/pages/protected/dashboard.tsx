import React from "react";
import ComponentHeader from "@/components/reusables/component-header";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import Alerts from "@/components/dashboard/alerts";
import ThreeCards from "@/components/dashboard/three-cards";
import { useAppSelector } from '@/hooks/redux-hooks';

const Dashboard = () => {
  const { data } = useAppSelector(state => state.employee);

  return (
    <div className="flex flex-col justify-start items-start gap-4 p-8">
    <ComponentHeader title="Dashboard" description={`Welcome back, ${data?.name}. Today is Monday, June 12, 2023.`}/>
      <ThreeCards />
      <RecentTransactions />
      <div className="w-1/3">
        <Alerts />
      </div>
    </div>
  );
};

export default Dashboard;
