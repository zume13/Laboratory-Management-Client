import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/patient/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    path: "/patient/appointments",
    icon: CalendarDays,
  },
  {
    label: "Lab Results",
    path: "/patient/results",
    icon: FileText,
  },
];

function sidebarLinkClass({ isActive }: { isActive: boolean }) {
  return `relative flex h-14 items-center transition-colors ${
    isActive
      ? "bg-green-50 font-semibold text-green-700"
      : "text-gray-600 hover:bg-gray-100 hover:text-green-700"
  }`;
}

export default function PatientSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return localStorage.getItem("patient-sidebar-collapsed") === "true";
  });

  function toggleSidebar() {
    setIsCollapsed((collapsed) => {
      const newState = !collapsed;

      localStorage.setItem(
        "patient-sidebar-collapsed",
        String(newState)
      );

      return newState;
    });
  }

  return (
    <aside
      className={`relative flex h-full shrink-0 flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <nav className="mt-6 flex-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={sidebarLinkClass}
              title={isCollapsed ? item.label : undefined}
            >
              {/* Icon */}
              <span className="absolute left-0 flex h-14 w-20 items-center justify-center">
                <Icon
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </span>

              {/* Label */}
              <span
                className={`absolute left-20 ml-3 whitespace-nowrap transition-all duration-200 ease-out ${
                  isCollapsed
                    ? "translate-x-[-8px] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="absolute right-0 top-1/2 z-10 flex h-10 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors hover:text-green-700"
        aria-label={
          isCollapsed
            ? "Expand sidebar"
            : "Collapse sidebar"
        }
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </aside>
  );
}