import { useState } from "react";
import useJwtDecode from "../hooks/useJwtDecode";
import AttendanceAdmin from "../sections/AttendanceAdmin";
import FeesAdmin from "../sections/FeesAdmin";
import LeaveAdmin from "../sections/LeaveAdmin";
import PendingStudents from "../sections/PendingStudents";
// we'll create sections/ folder to keep major dashboard modules

export default function AdminDashboard() {
  const admin = useJwtDecode();
  const [activeMenu, setActiveMenu] = useState("students-approve");

  if (!admin || admin.role !== "admin") {
    return <div className="p-4">Unauthorized</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Top admin header */}
      <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h2>Welcome Admin, {admin.name}</h2>
        <div className="flex gap-4 items-center">
          <button className="bg-blue-700 px-3 py-1 rounded" onClick={() => setActiveMenu("profile")}>Profile</button>
          <button className="bg-red-600 px-3 py-1 rounded" onClick={() => {localStorage.clear(); window.location.href="/login"}}>Logout</button>
        </div>
      </div>
      
      {/* Admin Menu Bar */}
      <div className="bg-gray-200 p-2 flex gap-2">
        <div className="relative group">
          <button className="px-3 py-1 bg-white rounded">Students</button>
          <div className="absolute hidden group-hover:block bg-white shadow-md p-2">
            <div onClick={() => setActiveMenu("students-register")}>Register New</div>
            <div onClick={() => setActiveMenu("students-approve")}>Approve Self Register</div>
            <div onClick={() => setActiveMenu("students-attendance")}>Attendance</div>
            <div onClick={() => setActiveMenu("students-fees")}>Fees</div>
            <div onClick={() => setActiveMenu("students-leave")}>Leave</div>
          </div>
        </div>
        <div className="relative group">
          <button className="px-3 py-1 bg-white rounded">Faculty</button>
          {/* similar drop-down */}
        </div>
        <div><button onClick={()=>setActiveMenu("administration")} className="px-3 py-1 bg-white rounded">Administration</button></div>
        <div><button onClick={()=>setActiveMenu("department")} className="px-3 py-1 bg-white rounded">Departments</button></div>
      </div>

      {/* Display Section */}
      <div className="p-4">
        {activeMenu === "students-approve" && <PendingStudents />}
        {activeMenu === "students-attendance" && <AttendanceAdmin />}  //
        {activeMenu === "students-fees" && <FeesAdmin />}
        {activeMenu === "students-leave" && <LeaveAdmin />}
        {/* other sections to be implemented */}
      </div>
    </div>
  );
}
