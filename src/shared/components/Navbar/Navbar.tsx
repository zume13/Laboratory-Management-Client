import { Link } from "react-router-dom";
import pddlLogo from "@/assets/PDDL-Logo.png";

export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-white px-8 shadow-sm">
      {/* Logo */}
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

      {/* Navigation + Auth */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <li>
            <a href="#home" className="text-base font-medium pb-1 tect-green-700 border-b-2 border-green-600">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="text-base font-medium pb-1 text-gray-700 hover:text-green-600 transition-colors">
              Services
            </a>
          </li>

          <li>
            <a href="#about" className="text-base font-medium pb-1 text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </a>
          </li>

          <li>
            <a href="#contact" className="text-base font-medium pb-1 text-gray-700 hover:text-green-600 transition-colors">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}