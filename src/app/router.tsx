import { Routes, Route, Navigate } from "react-router-dom";
import { RoleGuard } from "./RoleGuard";

import PublicLayout from "@/layouts/PublicLayout";
import PatientLayout from "@/layouts/PatientLayout";
import StaffLayout from "@/layouts/StaffLayout";

import LandingPage from "@/pages/landing/LandingPage";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";

import PatientDashboardPage from "@/pages/patient/PatientDashboardPage";
import { MyAppointmentsPage } from "@/pages/patient/MyAppointmentsPage";
import { LabResultsPage } from "@/pages/patient/LabResultsPage";

import { useAuth } from "@/features/auth/store/AuthContext";

function HomeRedirect() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="p-8 text-sm text-slate-500">
        Loading…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case "Patient":
      return <Navigate to="/patient/dashboard" replace />;

    case "Administrator":
      return <Navigate to="/admin/system-health" replace />;

    default:
      return <Navigate to="/staff/slots" replace />;
  }
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/home" element={<HomeRedirect />} />

      <Route element={<PatientLayout />}>
        <Route
          path="/patient/dashboard"
          element={
            <RoleGuard allow={["Patient"]}>
              <PatientDashboardPage />
            </RoleGuard>
          }
        />

        <Route
          path="/patient/appointments"
          element={
            <RoleGuard allow={["Patient"]}>
              <MyAppointmentsPage />
            </RoleGuard>
          }
        />

        <Route
          path="/patient/results"
          element={
            <RoleGuard allow={["Patient"]}>
              <LabResultsPage />
            </RoleGuard>
          }
        />
      </Route>

      <Route
        path="/staff/slots"
        element={
          <RoleGuard
            allow={[
              "MedicalTechnologist",
              "Pathologist",
              "Phlebotomist",
            ]}
          >
            <div className="p-8 text-sm text-slate-500">
              Slot management — coming soon.
            </div>
          </RoleGuard>
        }
      />

      <Route
        path="/admin/system-health"
        element={
          <RoleGuard allow={["Administrator"]}>
            <div className="p-8 text-sm text-slate-500">
              System health — coming soon.
            </div>
          </RoleGuard>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />

        {/* Patient layout testing */}
      <Route element={<PatientLayout />}>
        <Route 
          path="/test/patient-layout"
          element={<PatientDashboardPage />} />

        <Route
          path="/test/patient-appointments"
          element={<MyAppointmentsPage />}
        />

        <Route
          path="/test/patient/results"
          element={<LabResultsPage />}
        />
      </Route>

      {/* Staff layout testing */}
      <Route element={<StaffLayout />}>
        <Route
          path="/test/staff-layout"
          element={
            <div className="p-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Staff Dashboard
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Staff layout testing page.
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}