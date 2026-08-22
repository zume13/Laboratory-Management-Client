import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";
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
          <Bell className="h-5 w-5" strokeWidth={1.8} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileOpen((open) => !open)}
            className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50"
            aria-label="User menu"
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
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                isProfileOpen ? "rotate-180" : ""
              }`}
              strokeWidth={1.8}
            />
          </button>

          {/* Profile menu */}
          {isProfileOpen && (
            <div className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl">
              <Link
                to="/patient/profile"
                className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-green-700"
              >
                <UserRound
                  className="h-5 w-5 text-gray-400"
                  strokeWidth={1.8}
                />

                <span>Profile</span>
              </Link>

              <Link
                to="/patient/settings"
                className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-green-700"
              >
                <Settings
                  className="h-5 w-5 text-gray-400"
                  strokeWidth={1.8}
                />

                <span>Settings</span>
              </Link>

              <div className="my-1 border-t border-gray-200" />

              <button
                type="button"
                className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
              >
                <LogOut
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />

                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}