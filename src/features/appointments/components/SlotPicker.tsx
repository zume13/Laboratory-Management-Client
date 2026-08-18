import { useAvailableSlots } from "../hooks/useAppointments";

interface SlotPickerProps {
  date: string;
  testCategoryId: string;
  selectedSlotId: string | null;
  onSelect: (slotId: string) => void;
}

export function SlotPicker({ date, testCategoryId, selectedSlotId, onSelect }: SlotPickerProps) {
  const { data: slots, isLoading, isError } = useAvailableSlots(date, testCategoryId);

  if (!date || !testCategoryId) {
    return <p className="text-sm text-slate-500">Choose a date and test type to see open slots.</p>;
  }

  if (isLoading) {
    return <p className="text-sm text-slate-500">Loading available slots…</p>;
  }

  if (isError) {
    return <p className="text-sm text-red-600">Couldn't load slots. Try again.</p>;
  }

  if (!slots || slots.length === 0) {
    return <p className="text-sm text-slate-500">No open slots for this date. Try another day.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
      {slots.map((slot) => {
        const remaining = slot.capacity - slot.bookedCount;
        const isSelected = slot.id === selectedSlotId;

        return (
          <button
            key={slot.id}
            type="button"
            disabled={slot.isFull}
            onClick={() => onSelect(slot.id)}
            className={`rounded-md border px-3 py-2 text-sm transition ${
              isSelected
                ? "border-brand-600 bg-brand-50 font-semibold text-brand-700"
                : "border-slate-300 hover:border-brand-400"
            } ${slot.isFull ? "cursor-not-allowed opacity-40" : ""}`}
          >
            <span className="block">{slot.startTime}</span>
            <span className="block text-xs text-slate-500">
              {slot.isFull ? "Full" : `${remaining} left`}
            </span>
          </button>
        );
      })}
    </div>
  );
}
