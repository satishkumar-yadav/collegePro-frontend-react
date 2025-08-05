// src/Router.jsx
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import Dashboard from './Dashboard';
import Home from './Home';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
// import AdminDashboard from './pages/AdminDashboard';  // path based on your structure
import AdminAddRecords from './pages/AdminAddRecords';
import PlacementsAchievements from './pages/PlacementsAchievements';

const AppRoutes = () => {
  const { isLoggedIn, role } = useAuth(); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={['Student', 'Faculty', 'Admin']}>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/admin" element={
        <ProtectedRoute allowedRoles={['Admin']}>
          <AdminPanel />
        </ProtectedRoute> 
      } />

      <Route path="/admin/add-records" element={<AdminAddRecords />} />

      <Route path="/student" element={
        <ProtectedRoute allowedRoles={['Student']}>
          <StudentDashboard />
        </ProtectedRoute>
      } />

      <Route path="/faculty" element={
        <ProtectedRoute allowedRoles={['Faculty']}>
          <FacultyDashboard />
        </ProtectedRoute>
      } />

      {/* Fallback route */}
      <Route path="/placements" element={<PlacementsAchievements />} />

      {/* <Route path="*" element={<Navigate to="/" />} />  */}
       <Route path="*" element={<div>404 – Page Not Found</div>} />

    </Routes>
  );
};

export default AppRoutes;


/* updated route 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="*" element={<div>404 – Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

*/

/*

import ProtectedRoute from "./components/ProtectedRoute";

<Route path="/dashboard" element={
  <ProtectedRoute><Dashboard /></ProtectedRoute>
} />

<Route path="/student" element={
  <ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>
} />


*/
