import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex item-center justify-between px-8 py-4 bg-white  shadow-sm">
      <div className="flex items-center gap-2">
        <img src="" alt="PDDL Logo" className="h-9 w-9 object-contain"></img>
        <div className="leading-tight">
          <div className="text-xl font-extrabold text-green-700">PDDL</div>
          <div className="text-[10px] font-medium text-green-700 -mt-1">Diagnostic Laboratory</div>
        </div>
      </div>

      <ul className="flex gap-10 list-none">
        <li><a href="" className="text-sm font-medium text-green-700 border-b-2 border-green-600 pb-1">Home</a></li>
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