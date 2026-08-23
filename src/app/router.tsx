import { Routes, Route, Navigate } from "react-router-dom";
import { RoleGuard } from "./RoleGuard";

import PublicLayout from "@/layouts/PublicLayout";
import PatientLayout from "@/layouts/PatientLayout";

import LandingPage from "@/pages/landing/LandingPage";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";

import DashboardPage from "@/pages/patient/DashboardPage";
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
              <DashboardPage />
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

        {/*for testing*/}
      <Route element={<PatientLayout />}>
        <Route 
          path="/test/patient-layout"
          element={<DashboardPage />} />

        <Route
          path="/test/patient-appointments"
          element={<MyAppointmentsPage />}
        />

        <Route
          path="/test/patient/results"
          element={<LabResultsPage />}
        />
      </Route>
    </Routes>
  );
}