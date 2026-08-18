import { Routes, Route, Navigate } from "react-router-dom";
import { RoleGuard } from "./RoleGuard";
import { LoginPage } from "@/pages/LoginPage";
import { BookAppointmentPage } from "@/pages/patient/BookAppointmentPage";
import { MyAppointmentsPage } from "@/pages/patient/MyAppointmentsPage";
import { useAuth } from "@/features/auth/store/AuthContext";

// Sends a signed-in user to the right home screen for their role, since
// Patient/Staff/Admin all land on different default pages after login.
function HomeRedirect() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div className="p-8 text-sm text-slate-500">Loading…</div>;
  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case "Patient":
      return <Navigate to="/patient/appointments" replace />;
    case "Administrator":
      return <Navigate to="/admin/system-health" replace />;
    default:
      // MedicalTechnologist, Pathologist, Phlebotomist
      return <Navigate to="/staff/slots" replace />;
  }
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Patient routes */}
      <Route
        path="/patient/appointments"
        element={
          <RoleGuard allow={["Patient"]}>
            <MyAppointmentsPage />
          </RoleGuard>
        }
      />
      <Route
        path="/patient/book"
        element={
          <RoleGuard allow={["Patient"]}>
            <BookAppointmentPage />
          </RoleGuard>
        }
      />

      {/* Staff and admin routes are stubbed here — same RoleGuard pattern
          applies once pages/staff and pages/admin are built out. */}
      <Route
        path="/staff/slots"
        element={
          <RoleGuard allow={["MedicalTechnologist", "Pathologist", "Phlebotomist"]}>
            <div className="p-8 text-sm text-slate-500">Slot management — coming soon.</div>
          </RoleGuard>
        }
      />
      <Route
        path="/admin/system-health"
        element={
          <RoleGuard allow={["Administrator"]}>
            <div className="p-8 text-sm text-slate-500">System health — coming soon.</div>
          </RoleGuard>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
