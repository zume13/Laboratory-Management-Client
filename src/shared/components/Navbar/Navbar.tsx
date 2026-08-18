import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Laboratory System
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}