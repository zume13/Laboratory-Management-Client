import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

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

      {/* Upcoming Appointment */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
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

      {/* Recent Results */}
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
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <FileText className="h-5 w-5" />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Complete Blood Count
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Released August 18, 2026
                </p>
              </div>
            </div>

            <Link
              to="/patient/results"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              View
            </Link>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <FileText className="h-5 w-5" />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Lipid Profile
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Released August 15, 2026
                </p>
              </div>
            </div>

            <Link
              to="/patient/results"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              View
            </Link>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <FileText className="h-5 w-5" />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Fasting Blood Sugar
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Released August 12, 2026
                </p>
              </div>
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