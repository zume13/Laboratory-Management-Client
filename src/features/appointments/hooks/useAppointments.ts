import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { appointmentsApi } from "../api/appointmentsApi";
import type { BookAppointmentRequest } from "../types";

// Central place for query keys so invalidation stays consistent across the
// feature instead of re-typing string arrays in every hook.
export const appointmentKeys = {
  all: ["appointments"] as const,
  mine: () => [...appointmentKeys.all, "mine"] as const,
  availableSlots: (date: string, testCategoryId: string) =>
    ["appointment-slots", "available", date, testCategoryId] as const,
};

export function useMyAppointments() {
  return useQuery({
    queryKey: appointmentKeys.mine(),
    queryFn: appointmentsApi.getMyAppointments,
  });
}

export function useAvailableSlots(date: string, testCategoryId: string) {
  return useQuery({
    queryKey: appointmentKeys.availableSlots(date, testCategoryId),
    queryFn: () => appointmentsApi.getAvailableSlots(date, testCategoryId),
    // Avoid firing the request until both filters are actually chosen.
    enabled: Boolean(date && testCategoryId),
  });
}

export function useBookAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: BookAppointmentRequest) => appointmentsApi.book(payload),
    onSuccess: (_appointment, variables) => {
      // Booking changes both "my appointments" and the slot's remaining
      // capacity, so both caches need to be invalidated together.
      queryClient.invalidateQueries({ queryKey: appointmentKeys.mine() });
      queryClient.invalidateQueries({ queryKey: ["appointment-slots", "available"] });
      void variables;
    },
  });
}

export function useCancelAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (appointmentId: string) => appointmentsApi.cancel(appointmentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: appointmentKeys.mine() });
      queryClient.invalidateQueries({ queryKey: ["appointment-slots", "available"] });
    },
  });
}
