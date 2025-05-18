import {
  UserRound,
  CreditCard,
  LayoutDashboardIcon,
  Search,
  ArrowLeftRight,
  Banknote,
  ChartSpline,
  HelpCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { SidebarFooter } from './sidebar-footer'; 

import { NavLink } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Customer Search",
    url: "/customer-search",
    icon: Search,
  },
  {
    title: "Customer Profile",
    url: "/customer-profile",
    icon: UserRound,
  },
  {
    title: "Account Details",
    url: "/account-details",
    icon: CreditCard,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Cash Drawer",
    url: "/cash-drawer",
    icon: Banknote,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: ChartSpline,
  },
  {
    title: "Help Center",
    url: "/help-center",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Teller Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="p-6 hover:bg-[#e6ebf5]" asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter /> 
    </Sidebar>
  );
}
