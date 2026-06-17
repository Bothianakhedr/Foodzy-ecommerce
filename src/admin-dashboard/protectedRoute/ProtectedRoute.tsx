import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../app/store";
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { token } = useSelector((state: RootState) => state.auth);

  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
}
