import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export type ProtectedRouteProps = {
  children: JSX.Element;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
