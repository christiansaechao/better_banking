import React from "react";
import { UserRound, LogOut } from "lucide-react";

export const SidebarFooter = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-200">
      <div className="flex flex-row gap-6 justify-start items-center">
        <UserRound />
        <div className="flex flex-col">
          <span>John Doe</span>
          <span className="text-xs">Teller #42</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <LogOut />
        Logout
      </div>
    </div>
  );
};
