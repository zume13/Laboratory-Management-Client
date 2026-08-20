import { useState } from "react";
import { Link } from "react-router-dom";
import pddlLogo from "@/assets/PDDL-Logo.png";

export default function DashboardNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8 shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={pddlLogo}
          alt="PDDL Logo"
          className="h-10 w-10 object-contain"
        />

        <div className="leading-tight">
          <div className="text-xl font-extrabold text-green-700">
            PDDL
          </div>

          <div className="-mt-1 text-[11px] font-medium text-green-700">
            Diagnostic Laboratory
          </div>
        </div>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-green-700"
          aria-label="Notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 1-5.714 0A8.968 8.968 0 0 1 6 15.75V11a6 6 0 1 1 12 0v4.75a8.968 8.968 0 0 1-3.143 1.332ZM9 17.25a3 3 0 0 0 6 0"
            />
          </svg>

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileOpen((open) => !open)}
            className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50"
          >
            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
              PP
            </div>

            {/* User information */}
            <div className="hidden text-left sm:block">
              <p className="text-base font-semibold text-gray-800">
                Peter Parker
              </p>

              <p className="text-xs text-gray-500">
                Patient
              </p>
            </div>

            {/* Chevron */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className={`h-4 w-4 text-gray-500 transition-transform ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {/* Profile menu */}
          {isProfileOpen && (
            <div className="absolute right-0 z-50 mt-2 w-52 rounded-lg border bg-white py-2 shadow-lg">
              <Link
                to="/patient/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700"
              >
                My Profile
              </Link>

              <Link
                to="/patient/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700"
              >
                Settings
              </Link>

              <div className="my-1 border-t" />

              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}