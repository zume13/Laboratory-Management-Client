import { NavLink, Link } from "react-router-dom";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `text-xl font-large pb-1 ${
    isActive
      ?  "text-green-700 border-b-2 border-green-600"
      :  "text-gray-700 hover:text-green-600"
  }` ;
}



export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src="src/assets/PDDL Logo.png" alt="PDDL Logo" className="h-12 w-12 object-contain"></img>
        </Link>
        <div className="leading-tight">
          <div className="text-4xl font-extrabold text-green-700">PDDL</div>
          <div className="text-[15px] font-medium text-green-700 -mt-1">Diagnostic Laboratory</div>
        </div>
      </div>
      

      <ul className="flex gap-10 list-none pl-64">
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
        <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
        <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
      </ul>

      <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-2.5 rounded-md text-xl font-semibold">
        Log in
      </button>
      
    </nav>
  );
}