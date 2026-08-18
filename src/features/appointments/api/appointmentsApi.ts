import { httpClient } from "@/shared/api/httpClient";
import type { Appointment, AppointmentSlot, BookAppointmentRequest } from "../types";

export const appointmentsApi = {
  // Backs IAppointmentSlotRepository.GetAvailableByDateAndCategoryAsync
  getAvailableSlots: async (date: string, testCategoryId: string): Promise<AppointmentSlot[]> => {
    const { data } = await httpClient.get<AppointmentSlot[]>("/appointment-slots/available", {
      params: { date, testCategoryId },
    });
    return data;
  },

  // Backs IAppointmentRepository.GetByPatientIdAsync
  getMyAppointments: async (): Promise<Appointment[]> => {
    const { data } = await httpClient.get<Appointment[]>("/appointments/mine");
    return data;
  },

  // Backs AppointmentBookingService.Book — the slot Reserve() + Appointment
  // Create() transaction happens server-side in a single request.
  book: async (payload: BookAppointmentRequest): Promise<Appointment> => {
    const { data } = await httpClient.post<Appointment>("/appointments", payload);
    return data;
  },

  // Backs AppointmentBookingService.Cancel
  cancel: async (appointmentId: string): Promise<void> => {
    await httpClient.post(`/appointments/${appointmentId}/cancel`);
  },

  confirm: async (appointmentId: string): Promise<Appointment> => {
    const { data } = await httpClient.post<Appointment>(`/appointments/${appointmentId}/confirm`);
    return data;
  },
};
