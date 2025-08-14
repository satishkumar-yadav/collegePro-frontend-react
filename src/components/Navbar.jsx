import { NavLink } from "react-router-dom";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "THE INSTITUTE", path: "/institute" },
  { label: "ACADEMICS", path: "/academics" },
  { label: "ADMISSION", path: "/admission" },
  { label: "PLACEMENT", path: "/placement" },
  { label: "INFRASTRUCTURE", path: "/facilities" },
  { label: "GALLERY", path: "/gallery" },
  { label: "CAREER", path: "/career" },
   { label: "Login", path: "/login" },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-t border-b border-gray-200">
      <ul className="flex justify-center">
        {navItems.map(item => (
          <li key={item.path} className="mx-3">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `py-3 px-4 block ${isActive ? "text-blue-600 font-bold" : "text-gray-800"}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}



/*
 <header>
      {/* Top bar with logo and name }
      <div className="top-bar">
        <img src={logo} alt="College Logo" className="college-logo" />
        <h1 className="college-name">ABC Institute of Technology</h1>
      </div>

      {/* Navigation bar }
      <nav className="nav-bar">
        <ul className="nav-links">
           <li><Link to="/">Home</Link></li>


           */ 


           