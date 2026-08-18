import { Link, NavLink, Outlet } from "react-router-dom";

export default function PatientLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top header */}
      <header className="border-b bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          <Link to="/" className="text-xl font-bold text-slate-900">
            Laboratory System
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Patient</span>

            <button
              type="button"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="min-h-[calc(100vh-4rem)] w-64 border-r bg-white">
          <nav className="space-y-1 p-4">
            <NavLink
              to="/patient/appointments"
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              My Appointments
            </NavLink>

            <NavLink
              to="/patient/book"
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              Book Appointment
            </NavLink>

            {/* Future patient pages */}
            <NavLink
              to="/patient/laboratory"
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              Laboratory Requests
            </NavLink>

            <NavLink
              to="/patient/results"
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              Results
            </NavLink>

            <NavLink
              to="/patient/notifications"
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              Notifications
            </NavLink>

            <NavLink
              to="/patient/profile"
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              Profile
            </NavLink>
          </nav>
        </aside>

        {/* Page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}