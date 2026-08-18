import type { AppointmentStatus } from "../types";

const STATUS_STYLES: Record<AppointmentStatus, string> = {
  Booked: "bg-amber-100 text-amber-800",
  Confirmed: "bg-brand-100 text-brand-700",
  Completed: "bg-slate-200 text-slate-700",
  Cancelled: "bg-red-100 text-red-700",
  NoShow: "bg-red-100 text-red-700",
};

export function AppointmentStatusBadge({ status }: { status: AppointmentStatus }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}
