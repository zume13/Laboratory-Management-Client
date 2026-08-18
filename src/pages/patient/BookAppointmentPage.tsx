import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlotPicker } from "@/features/appointments/components/SlotPicker";
import { useBookAppointment } from "@/features/appointments/hooks/useAppointments";
import type { ApiError } from "@/shared/api/types";

// In a full build this would come from ITestCategoryRepository.GetActiveAsync
// via a useTestCategories() hook in features/laboratory. Hardcoded here to
// keep this scaffold self-contained.
const TEST_CATEGORIES = [
  { id: "cbc", name: "Complete Blood Count" },
  { id: "lipid", name: "Lipid Panel" },
  { id: "urinalysis", name: "Urinalysis" },
];

export function BookAppointmentPage() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [testCategoryId, setTestCategoryId] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  const bookMutation = useBookAppointment();

  async function handleConfirm() {
    if (!selectedSlotId) return;
    setError(null);
    try {
      await bookMutation.mutateAsync({
        appointmentSlotId: selectedSlotId,
        testCategoryId,
        bookingChannel: "Online",
      });
      navigate("/patient/appointments");
    } catch (err) {
      // Most likely AppointmentSlotErrors.FullSlots if someone else booked
      // the last spot between page load and submit — surfaced verbatim
      // since the backend message is already patient-facing.
      setError(err as ApiError);
    }
  }

  return (
      <div className="max-w-lg space-y-6">
        <h1 className="text-lg font-semibold text-slate-900">Book an appointment</h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Test type</label>
            <select
              value={testCategoryId}
              onChange={(e) => {
                setTestCategoryId(e.target.value);
                setSelectedSlotId(null);
              }}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="">Select…</option>
              {TEST_CATEGORIES.map((tc) => (
                <option key={tc.id} value={tc.id}>
                  {tc.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Date</label>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => {
                setDate(e.target.value);
                setSelectedSlotId(null);
              }}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700">Available times</p>
          <SlotPicker
            date={date}
            testCategoryId={testCategoryId}
            selectedSlotId={selectedSlotId}
            onSelect={setSelectedSlotId}
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error.message}
          </p>
        )}

        <button
          type="button"
          disabled={!selectedSlotId || bookMutation.isPending}
          onClick={handleConfirm}
          className="w-full rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {bookMutation.isPending ? "Booking…" : "Confirm appointment"}
        </button>
      </div>
  );
}
