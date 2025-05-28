import React from "react";
import { GenericCard } from "@/components/reusables";
import { AlertTriangle, CircleAlert } from "lucide-react";

const Alerts = () => {
  return (
    <GenericCard cardTitle="Alerts" showButton={true}>
      <div className="flex flex-col gap-3">
        <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
          <div className="grid grid-cols-6 gap-2">
            <AlertTriangle className="grid col-span-1 row-span-2 place-self-center" />
            <p className="text-sm font-medium text-gray-800 col-span-5 text-left">
              System maintenance scheduled
            </p>
            <p className="text-xs text-gray-600 col-span-5 text-left">
              Today at 7:00 PM - 9:00 PM
            </p>
          </div>
        </div>

        <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="grid grid-cols-6 gap-2">
            <CircleAlert className="grid col-span-1 row-span-2 place-self-center" />
            <p className="text-left text-sm font-medium text-gray-800 col-span-5">
              New policy updates
            </p>
            <p className="text-left text-xs text-gray-600 col-span-5">
              Review updated procedures for wire transfers
            </p>
          </div>
        </div>
      </div>
    </GenericCard>
  );
};

export default Alerts;