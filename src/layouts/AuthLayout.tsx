import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, LockKeyhole } from "lucide-react";

export default function AuthLayout() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <div className="relative min-h-screen bg-[#f7f8fa] px-4 py-8">
      {/* Back to landing page */}
      <Link
        to="/"
        className="
          absolute
          left-5
          top-5
          flex
          items-center
          gap-2
          rounded-lg
          px-3
          py-2
          text-sm
          font-medium
          text-slate-500
          transition
          hover:bg-white
          hover:text-[#126b32]
          hover:shadow-sm
        "
      >
        <Home className="h-4 w-4" strokeWidth={1.8} />
        <span>Home</span>
      </Link>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[600px] flex-col items-center justify-center">
        {/* Main authentication card */}
        <div className="w-full rounded-[24px] border border-slate-200 bg-white px-7 py-8 shadow-[0_3px_12px_rgba(0,0,0,0.14)] sm:px-9">
          {/* PDDL branding */}
					<div className="mb-8 flex items-center justify-center gap-3">
						<img
							src="/pddl-logo.png"
							alt="PDDL Diagnostic Laboratory logo"
							className="h-14 object-contain"
						/>

						<div className="text-left">
							<div className="text-5xl font-bold leading-none tracking-tight text-[#126b32]">
								PDDL
							</div>

							<p className="mt-1 text-sm font-semibold text-[#126b32]">
								Diagnostic Laboratory
							</p>
						</div>
					</div>

          {/* Login/Register tabs */}
          <div className="mb-7 grid grid-cols-2 border-b border-slate-300">
            <Link
              to="/login"
              className={`border-b-2 pb-2 text-center text-base font-semibold transition-colors ${
                isLogin
                  ? "border-[#178a42] text-[#126b32]"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              Log In
            </Link>

            <Link
              to="/register"
              className={`border-b-2 pb-2 text-center text-base font-semibold transition-colors ${
                isRegister
                  ? "border-[#178a42] text-[#126b32]"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              Register
            </Link>
          </div>

          <Outlet />
        </div>

        {/* Security note */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-700">
          <LockKeyhole className="h-4 w-4" strokeWidth={1.8} />
          <span>Your health data is secure and confidential</span>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-slate-400">
          <p>© 2026 PDDL Diagnostic Laboratory. All rights reserved.</p>

          <div className="mt-1 flex items-center justify-center gap-2">
            <a href="#" className="hover:text-slate-600">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="#" className="hover:text-slate-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}