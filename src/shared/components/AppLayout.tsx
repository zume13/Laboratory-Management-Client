import { type ReactNode } from "react";
import { useAuth } from "@/features/auth/store/AuthContext";

export function AppLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight text-brand-700">
            Laboratory Management
          </span>
          {user && (
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>
                {user.firstName} {user.lastName} · {user.role}
              </span>
              <button onClick={() => logout()} className="font-medium text-slate-500 hover:text-slate-700">
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
