import { Outlet } from "react-router-dom";
import DashboardNavbar from "@/shared/components/DashboardNavbar/DashboardNavbar";
import PatientSidebar from "@/features/patients/components/PatientSidebar";

export default function PatientLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar />

      <div className="flex min-h-[calc(100vh-4rem)]">
        <PatientSidebar />

        <main className="min-w-0 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}