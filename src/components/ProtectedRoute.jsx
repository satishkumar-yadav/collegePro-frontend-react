// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import { useAuth2 } from "../hooks/useAuth";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) return <Navigate to="/" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;


/* custom hooks - hooks/useAuth

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth2();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/auth" />;
  if (role && user.role !== role) return <p>Access denied</p>;

  return children;
}

*/