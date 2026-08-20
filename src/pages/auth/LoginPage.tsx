import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-[22px] font-semibold text-slate-900">
          Log In
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Sign in to access your laboratory records and results.
        </p>
      </div>

      <LoginForm />
    </div>
  );
}