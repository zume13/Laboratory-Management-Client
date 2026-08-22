import {
  CalendarDays,
  Clock3,
  MapPin,
  CheckCircle2,
  CircleAlert,
} from "lucide-react";

const upcomingAppointments = [
  {
    id: 1,
    test: "Complete Blood Count",
    date: "August 24, 2026",
    time: "9:30 AM",
    location: "PDDL Diagnostic Laboratory",
    status: "Scheduled",
  },
];

const pastAppointments = [
  {
    id: 2,
    test: "Lipid Profile",
    date: "August 15, 2026",
    time: "10:00 AM",
    location: "PDDL Diagnostic Laboratory",
    status: "Completed",
  },
  {
    id: 3,
    test: "Fasting Blood Sugar",
    date: "August 8, 2026",
    time: "8:30 AM",
    location: "PDDL Diagnostic Laboratory",
    status: "Completed",
  },
  {
    id: 4,
    test: "Urinalysis",
    date: "July 29, 2026",
    time: "9:00 AM",
    location: "PDDL Diagnostic Laboratory",
    status: "Completed",
  },
];

export function MyAppointmentsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Appointments
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View your upcoming and past laboratory appointments.
        </p>
      </div>

      {/* Upcoming Appointments */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-green-700" />

          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Appointment
          </h2>
        </div>

        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {appointment.test}
                      </h3>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        {appointment.status}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-gray-400" />
                        {appointment.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-gray-400" />
                        {appointment.time}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {appointment.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <CircleAlert className="mx-auto h-8 w-8 text-gray-400" />

            <p className="mt-3 text-sm font-medium text-gray-700">
              No upcoming appointments
            </p>

            <p className="mt-1 text-sm text-gray-500">
              You don't have any scheduled laboratory appointments.
            </p>
          </div>
        )}
      </section>

      {/* Past Appointments */}
      <section className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-700" />

          <h2 className="text-lg font-semibold text-gray-900">
            Past Appointments
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="divide-y divide-gray-100">
            {pastAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex flex-col gap-4 p-5 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-medium text-gray-900">
                    {appointment.test}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                    <span>{appointment.date}</span>
                    <span>{appointment.time}</span>
                    <span>{appointment.location}</span>
                  </div>
                </div>

                <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}