import { Link } from "react-router-dom";
import {
  CalendarDays,
  FlaskConical,
  FileText,
  ArrowRight,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Good morning, Peter 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your laboratory visits.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Upcoming Appointments
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                2
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-700">
              <CalendarDays className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Lab Requests
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                1
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-700">
              <FlaskConical className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Available Results
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-900">
                3
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-700">
              <FileText className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Upcoming appointment */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Appointment
            </h2>

            <Link
              to="/patient/appointments"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 rounded-lg bg-green-50 p-5">
            <p className="text-sm font-medium text-green-700">
              August 24, 2026
            </p>

            <h3 className="mt-1 text-xl font-semibold text-gray-900">
              Complete Blood Count
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              9:30 AM
            </p>

            <div className="mt-5">
              <Link
                to="/patient/appointments"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                View appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Quick Actions
          </h2>

          <div className="mt-5 space-y-3">
            <Link
              to="/patient/book"
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-green-200 hover:bg-green-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <Plus className="h-5 w-5" />
              </div>

              <span className="text-sm font-medium text-gray-700">
                Book Appointment
              </span>
            </Link>

            <Link
              to="/patient/appointments"
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-green-200 hover:bg-green-50"
            >
              <CalendarDays className="h-5 w-5 text-green-700" />

              <span className="text-sm font-medium text-gray-700">
                View Appointments
              </span>
            </Link>

            <Link
              to="/patient/results"
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-green-200 hover:bg-green-50"
            >
              <FileText className="h-5 w-5 text-green-700" />

              <span className="text-sm font-medium text-gray-700">
                View Results
              </span>
            </Link>
          </div>
        </section>
      </div>

      {/* Recent results */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Results
          </h2>

          <Link
            to="/patient/results"
            className="text-sm font-medium text-green-700 hover:text-green-800"
          >
            View all
          </Link>
        </div>

        <div className="mt-5 divide-y divide-gray-100">
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-gray-900">
                Complete Blood Count
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Released August 18, 2026
              </p>
            </div>

            <Link
              to="/patient/results"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              View
            </Link>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-gray-900">
                Lipid Profile
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Released August 15, 2026
              </p>
            </div>

            <Link
              to="/patient/results"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              View
            </Link>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-gray-900">
                Fasting Blood Sugar
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Released August 12, 2026
              </p>
            </div>

            <Link
              to="/patient/results"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              View
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}