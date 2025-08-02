// src/pages/FacultyDashboard.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const FacultyDashboard = () => {
  const { name, email, course } = useAuth();
   const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState(""); // Optional if you want to tag notice creator

  // Fetch all notices
  const fetchNotices = async () => {
    try {
      const res = await axios.get("https://your-backend-url.com/api/notices");
      setNotices(res.data);
    } catch (err) {
      console.error("Failed to fetch notices");
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Submit new notice
  const handleAddNotice = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-backend-url.com/api/notices", {
        title,
        createdBy,
      });
      alert("Notice added!");
      setTitle("");
      setCreatedBy("");
      fetchNotices(); // Refresh list
    } catch (err) {
      alert("Failed to post notice");
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>👨‍🏫 Faculty Dashboard</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Department:</strong> {course}</p>

        <h3>Upcoming Features</h3>
        <ul>
          <li>📝 Upload Notices</li>
          <li>📊 View Class Performance</li>
          <li>📅 Manage Timetables</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default FacultyDashboard;



/*

 <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Faculty Notice Board</h1>

      <form onSubmit={handleAddNotice} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Created By (e.g. Prof. Sharma)"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Publish Notice
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">📃 Published Notices</h2>
      <ul className="space-y-2">
        {notices.map((n, i) => (
          <li key={i} className="p-3 bg-gray-100 border shadow-sm">
            <strong>{n.title}</strong>
            <div className="text-sm text-gray-600">By: {n.createdBy}</div>
          </li>
        ))}
      </ul>
    </div>

    */