import React from "react";
import { supabase } from "@/lib/client";
import { UserRound, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { useAppSelector } from "@/hooks/redux-hooks";

export const SidebarFooter = () => {
  const navigate = useNavigate();
  const { data } = useAppSelector(state => state.employee);
  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }

    navigate('/login');
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-200">
      <div className="flex flex-row gap-6 justify-start items-center">
        <UserRound />
        <div className="flex flex-col items-start">
          <span>{data?.name}</span>
          <span className="text-xs">{data?.occupation}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 cursor-pointer" onClick={handleSignOut}>
        <LogOut />
        Logout
      </div>
    </div>
  );
};
