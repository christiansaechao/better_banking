import { createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  Reports,
  HelpCenter,
  CustomerSearch,
  Transactions,
  AccountDetails,
  CashDrawer,
  CustomerProfile
} from "../pages";
import Layout from "@/app/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // layout wraps everything
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "help-center",
        element: <HelpCenter />,
      },
      {
        path: "customer-search",
        element: <CustomerSearch />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "account-details",
        element: <AccountDetails />,
      },
      {
        path: "cash-drawer",
        element: <CashDrawer />,
      },
      {
        path: "customer-profile",
        element: <CustomerProfile />,
      },
    ],
  },
]);
