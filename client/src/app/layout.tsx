import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/sidebar/sidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
