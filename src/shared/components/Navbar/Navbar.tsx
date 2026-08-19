import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex item-center justify-between px-8 py-4 bg-white  shadow-sm">
      <span className="text-xl font-extrabold text-green-700">PDDL</span>

      <ul className="flex gap-8 list-none">
        <li><a href="" className="text-sm font-medium text-gray-700 hover:text-green-600">Home</a></li>
        <li><a href="" className="text-sm font-medium text-gray-700 hover:text-green-600">Services</a></li>
        <li><a href="" className="text-sm font-medium text-gray-700 hover:text-green-600">About Us</a></li>
        <li><a href="" className="text-sm font-medium text-gray-700 hover:text-green-600">Contact Us</a></li>
      </ul>

      <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2.5 rounded-md text-sm font-semibold">
        Log in
      </button>
      
    </nav>
  );
}