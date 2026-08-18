import { LoginForm } from "@/features/auth/components/LoginForm";

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-xl font-semibold text-slate-900">
          Sign in
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
