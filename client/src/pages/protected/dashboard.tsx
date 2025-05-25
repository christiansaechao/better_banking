import React from "react";
import ComponentHeader from "@/components/component-header/component-header";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import Alerts from "@/components/dashboard/alerts";
import ThreeCards from "@/components/dashboard/three-cards";
import { useAppSelector } from '@/hooks/redux-hooks';

const Dashboard = () => {
  const { session } = useAppSelector(state => state.auth);
  const { data } = useAppSelector(state => state.employee);
  console.log(data, session);
  return (
    <div className="flex flex-col justify-start items-start gap-6 p-8">
    <ComponentHeader title="Dashboard" user={data?.name} />
      <ThreeCards />
      <RecentTransactions />
      <div className="w-1/3">
        <Alerts />
      </div>
    </div>
  );
};

export default Dashboard;
