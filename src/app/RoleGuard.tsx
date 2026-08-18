import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/store/AuthContext";
import type { AppRole } from "@/features/auth/types";

interface RoleGuardProps {
  allow: AppRole[];
  children: ReactNode;
}

// Wraps a route element and redirects away if the signed-in user's role
// isn't in the allow list. Keeps role checks declarative at the route level
// instead of scattered through page components.
export function RoleGuard({ allow, children }: RoleGuardProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="p-8 text-sm text-slate-500">Loading…</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allow.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
