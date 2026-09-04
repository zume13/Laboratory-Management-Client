import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pddlLogo from "@/assets/PDDL-Logo.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "aboutUs", label: "AboutUs" },
  { id: "contactUs", label: "ContactUs" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const tabs = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    tabs.forEach((tab) => observer.observe(tab));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-8 shadow-sm">
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
          {navItems.map((item) => (
            <li key={item.id}>
              
              <a
                href={`#${item.id}`}
                className={`text-base font-medium pb-1 transition-colors ${
                  activeTab === item.id
                    ? "text-green-700 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
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