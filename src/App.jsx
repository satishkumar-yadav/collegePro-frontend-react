
//import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//import AdminPanel from './AdminDashboard';
//import Dashboard from './Dashboard';
//import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './Router';
// import Router from './router';  

export default function App() {
  return (

     <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  
/*
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
*/

  );
}


/* updated

// src/App.jsx
import './App.css';
import AppRouter from './router';

function App() {
  return <AppRouter />;
}

export default App;

*/