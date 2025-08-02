// src/pages/StudentDashboard.jsx
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
// import axios from "axios";

const StudentDashboard = () => {
  const { name, email, course } = useAuth();
  const [notices, setNotices] = useState([]);

  /*
  useEffect(() => {
    axios
      .get("https://your-backend-url.com/api/notices")
      .then((res) => setNotices(res.data))
      .catch((err) => console.error("Failed to fetch notices:", err));
  }, []);
  */

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(() => setNotices([{ title: 'Failed to load notices.' }]));
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>🎓 Student Dashboard</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Course:</strong> {course}</p>

        <h3>📢 Notices</h3>
        <ul>
          {notices.map((n, i) => <li key={i}>{n.title}</li>)}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;


/*

<div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📌 Student Notices</h1>
      {notices.length === 0 ? (
        <p>No notices available</p>
      ) : (
        <ul className="space-y-2">
          {notices.map((notice, i) => (
            <li
              key={i}
              className="p-3 rounded bg-gray-100 border shadow-sm"
            >
              <strong>{notice.title}</strong>
              <div className="text-sm text-gray-600">
                Posted by: {notice.createdBy || "Unknown"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>


    */