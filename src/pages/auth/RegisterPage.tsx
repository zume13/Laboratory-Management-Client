import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-[22px] font-semibold text-slate-900">
          Register
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Create an account to securely access your laboratory records and results.
        </p>
      </div>

      <RegisterForm />
    </div>
  );
}