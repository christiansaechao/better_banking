import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Dashboard,
  Reports,
  HelpCenter,
  CustomerSearch,
  Transactions,
  AccountDetails,
  CashDrawer,
  CustomerProfile,
} from "../pages";
import Layout from "@/app/layout";
import { Login, SignUp, ResetPassword } from "@/pages/auth";
import ProtectedRoutes from "@/app/protected-routes";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Layout />,
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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
