import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}