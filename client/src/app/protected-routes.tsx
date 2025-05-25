import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchUserSession } from "@/store/authSlice";
import { fetchUserInfo } from "@/store/employeeSlice";

const ProtectedRoutes = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, session} = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUserSession());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && session?.user.id) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, isAuthenticated, session])

  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
