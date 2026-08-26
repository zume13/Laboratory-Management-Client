import { Outlet } from "react-router-dom";
import DashboardNavbar from "@/shared/components/DashboardNavbar/DashboardNavbar";
import StaffSidebar from "@/features/staff/components/StaffSidebar";

export default function StaffLayout() {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Shared Dashboard Navbar */}
      <DashboardNavbar />

      <div className="flex min-h-0 flex-1">
        { /*  Staff Sidebar */ }
        <StaffSidebar />

        { /* Page Content */ }
        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}