// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import '../styles/navbar.css';
import LoginRegisterModal from './LoginRegisterModal';

const Navbar = () => {
/*
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) window.location.href = '/login';
}, []);
*/
const token = localStorage.getItem('token');
const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;

const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, role, logout } = useAuth();

  // Role-specific dashboard routes
  const getDashboardRoute = () => {
    if (role === 'Student') return '/student';
    if (role === 'Faculty') return '/faculty';
    if (role === 'Admin') return '/admin';
    return '/dashboard';
  };

  return (
    <header>
      {/* Top bar with logo and name */}
      <div className="top-bar">
        <img src={logo} alt="College Logo" className="college-logo" />
        <h1 className="college-name">ABC Institute of Technology</h1>
      </div>

      {/* Navigation bar */}
      <nav className="nav-bar">
        <ul className="nav-links">
           <li><Link to="/">Home</Link></li>
          <li><a href="/academics">Academics</a></li>
          <li><a href="/departments">Departments</a></li>
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/facilities">Facilities</a></li>
          <li><a href="/placement">Placement</a></li>
          <li><a href="/contact">Contact</a></li>

          {isLoggedIn ? (
            <>
              <li><Link to={getDashboardRoute()}>Dashboard</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <li>
              <button onClick={() => setShowModal(true)}>Login/Register</button>
              {showModal && <LoginRegisterModal onClose={() => setShowModal(false)} />}
            </li>
          )}

         {/*   
          <li>
             <button onClick={() => setShowModal(true)}>Login/Register</button>
      {showModal && <LoginRegisterModal onClose={() => setShowModal(false)} />}

          </li>

          
          <li> <button onClick={() => {
                       localStorage.removeItem('token');
                       window.location.href = '/';
                  }}>Logout</button>
          </li>
          */}

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;




/*

🧪 Bonus: Show Admin Panel Button Only If Admin
In Navbar.jsx:
jsx

import { isAdmin } from '../utils/auth';

{isAdmin() && <li><a href="/admin">Admin Panel</a></li>}


*/