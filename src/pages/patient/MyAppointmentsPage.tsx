import { Link } from "react-router-dom";
import { AppLayout } from "@/shared/components/AppLayout";
import { AppointmentCard } from "@/features/appointments/components/AppointmentCard";
import { useMyAppointments } from "@/features/appointments/hooks/useAppointments";

export function MyAppointmentsPage() {
  const { data: appointments, isLoading, isError } = useMyAppointments();

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-900">My appointments</h1>
        <Link
          to="/patient/book"
          className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Book new
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {isLoading && <p className="text-sm text-slate-500">Loading…</p>}
        {isError && <p className="text-sm text-red-600">Couldn't load your appointments.</p>}
        {appointments?.length === 0 && (
          <p className="text-sm text-slate-500">
            No appointments yet. Book one to get started.
          </p>
        )}
        {appointments?.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </AppLayout>
  );
}
