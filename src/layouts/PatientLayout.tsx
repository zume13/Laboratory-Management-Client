import { Outlet } from "react-router-dom";
import DashboardNavbar from "@/shared/components/DashboardNavbar/DashboardNavbar";
import PatientSidebar from "@/features/patients/components/PatientSidebar";

export default function PatientLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50">
      <DashboardNavbar />

      <div className="flex min-h-0 flex-1">
        <PatientSidebar />

        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}