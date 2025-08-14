import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import AdminDashboard from "../pages/AdminDashboard";
import ApplyAdmission from "../pages/ApplyAdmission";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <HeaderTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admission/apply" element={<ApplyAdmission />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Add more routes for other pages as needed */}
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
