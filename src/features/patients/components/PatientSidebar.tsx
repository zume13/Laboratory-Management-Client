import { NavLink } from "react-router-dom";

function sidebarLinkClass({ isActive }: { isActive: boolean }) {
  return `flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-green-50 text-green-700"
      : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
  }`;
}

export default function PatientSidebar() {
  return (
    <aside className="w-60 shrink-0 border-r bg-white">
      <nav className="space-y-1 p-4">
        <NavLink to="/patient/dashboard" className={sidebarLinkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/patient/appointments" className={sidebarLinkClass}>
          Appointments
        </NavLink>

        <NavLink to="/patient/book" className={sidebarLinkClass}>
          Book Appointment
        </NavLink>

        <NavLink to="/patient/laboratory" className={sidebarLinkClass}>
          Lab Requests
        </NavLink>

        <NavLink to="/patient/results" className={sidebarLinkClass}>
          Results
        </NavLink>

        <NavLink to="/patient/notifications" className={sidebarLinkClass}>
          Notifications
        </NavLink>

        <NavLink to="/patient/profile" className={sidebarLinkClass}>
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}