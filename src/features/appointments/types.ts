// Mirrors Domain.Aggregates.Appointment.Enums.AppointmentStatus
export type AppointmentStatus = "Booked" | "Confirmed" | "Cancelled" | "Completed" | "NoShow";

// Mirrors Domain.Aggregates.Appointment.Enums.BookingChannel
export type BookingChannel = "Online" | "WalkIn";

export interface Appointment {
  id: string;
  patientId: string;
  appointmentSlotId: string;
  testCategoryId: string;
  fulfillingLabRequestId: string | null;
  status: AppointmentStatus;
  bookingChannel: BookingChannel;
  createdAt: string;
  confirmedAt: string | null;
}

export interface AppointmentSlot {
  id: string;
  date: string; // ISO date
  startTime: string; // "HH:mm"
  endTime: string;
  testCategoryId: string | null;
  capacity: number;
  bookedCount: number;
  isFull: boolean;
}

export interface BookAppointmentRequest {
  appointmentSlotId: string;
  testCategoryId: string;
  bookingChannel: BookingChannel;
}
