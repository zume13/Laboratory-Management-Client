import { Outlet } from "react-router-dom";
import DashboardNavbar from "@/shared/components/DashboardNavbar/DashboardNavbar";
import StaffSidebar from "@/features/staff/components/StaffSidebar";

export default function StaffLayout() {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex min-h-0 flex-1">
        <StaffSidebar />

        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}