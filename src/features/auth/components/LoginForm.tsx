import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

import { useAuth } from "../store/AuthContext";
import type { ApiError } from "@/shared/api/types";

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<ApiError | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setApiError(null);

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      await login({
        email,
        password,
      });

      navigate("/home", { replace: true });
    } catch (err) {
      setApiError(err as ApiError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Email */}
      <FieldError message={errors.email}>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              if (errors.email) {
                setErrors((current) => ({
                  ...current,
                  email: "",
                }));
              }
            }}
            placeholder="Email Address"
            autoComplete="email"
            className={inputClass(Boolean(errors.email))}
          />
        </div>
      </FieldError>

      {/* Password */}
      <FieldError message={errors.password}>
        <div className="relative mt-3">
          <LockKeyhole
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);

              if (errors.password) {
                setErrors((current) => ({
                  ...current,
                  password: "",
                }));
              }
            }}
            placeholder="Password"
            autoComplete="current-password"
            className={`${inputClass(Boolean(errors.password))} pr-12`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              transition
              hover:text-slate-600
            "
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </FieldError>

      {/* Forgot password */}
      <div className="mt-1 text-right">
        <Link
          to="/forgot-password"
          className="text-sm text-slate-400 underline underline-offset-2 transition hover:text-slate-600"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Backend/API error */}
      {apiError && (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {apiError.message}
        </div>
      )}

      {/* Login */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          mt-6
          h-[55px]
          w-full
          rounded-[10px]
          bg-[#178a42]
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-[#137438]
          focus:outline-none
          focus:ring-2
          focus:ring-[#178a42]
          focus:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {isSubmitting ? "Logging in..." : "Log In"}
      </button>

      {/* Divider */}
      <div className="my-7 border-t border-slate-300" />

      {/* Register link */}
      <p className="text-center text-base text-slate-400">
        New Patient?{" "}
        <Link
          to="/register"
          className="font-semibold text-[#178a42] underline underline-offset-2"
        >
          Create An Account
        </Link>
      </p>
    </form>
  );
}

function FieldError({
  children,
  message,
}: {
  children: React.ReactNode;
  message?: string;
}) {
  return (
    <div>
      {children}

      {message && (
        <p className="mt-1 text-sm text-red-600">
          {message}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `
    h-[50px]
    w-full
    rounded-[11px]
    border
    bg-white
    pl-11
    pr-4
    text-[15px]
    text-slate-900
    outline-none
    transition
    placeholder:text-slate-400
    ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-slate-400 focus:border-[#178a42] focus:ring-1 focus:ring-[#178a42]"
    }
  `;
}