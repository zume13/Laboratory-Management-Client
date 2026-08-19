import { Link, NavLink } from "react-router-dom";
import pddlLogo from "@/assets/PDDL-Logo.png";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `text-base font-medium pb-1 transition-colors ${
    isActive
      ? "text-green-700 border-b-2 border-green-600"
      : "text-gray-700 hover:text-green-600"
  }`;
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={pddlLogo}
          alt="PDDL Logo"
          className="h-10 w-10 object-contain"
        />

        <div className="leading-tight">
          <div className="text-xl font-extrabold text-green-700">
            PDDL
          </div>
          <div className="-mt-1 text-[11px] font-medium text-green-700">
            Diagnostic Laboratory
          </div>
        </div>
      </Link>

      <ul className="flex items-center gap-8">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <Link
        to="/login"
        className="rounded-md bg-green-600 px-5 py-2 text-base font-semibold text-white transition-colors hover:bg-green-700"
      >
        Log in
      </Link>
    </nav>
  );
}