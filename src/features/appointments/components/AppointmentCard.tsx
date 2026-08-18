import { useCancelAppointment } from "../hooks/useAppointments";
import { AppointmentStatusBadge } from "./AppointmentStatusBadge";
import type { Appointment } from "../types";

export function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const cancelMutation = useCancelAppointment();
  const canCancel = appointment.status === "Booked" || appointment.status === "Confirmed";

  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
      <div>
        <p className="text-sm font-medium text-slate-900">
          {new Date(appointment.createdAt).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="mt-1">
          <AppointmentStatusBadge status={appointment.status} />
        </p>
      </div>

      {canCancel && (
        <button
          type="button"
          onClick={() => cancelMutation.mutate(appointment.id)}
          disabled={cancelMutation.isPending}
          className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-50"
        >
          {cancelMutation.isPending ? "Cancelling…" : "Cancel"}
        </button>
      )}
    </div>
  );
}
