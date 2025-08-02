import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [pendingUsers, setPendingUsers] = useState([]);

  // Fetch users awaiting approval
  const fetchPendingUsers = async () => {
    try {
      const res = await axios.get("https://your-backend-url.com/api/admin/pending");
      setPendingUsers(res.data);
    } catch (err) {
      console.error("Failed to load users", err);
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.post(`https://your-backend-url.com/api/admin/approve/${id}`);
      alert("User approved");
      fetchPendingUsers();
    } catch {
      alert("Approval failed");
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.delete(`https://your-backend-url.com/api/admin/reject/${id}`);
      alert("User rejected");
      fetchPendingUsers();
    } catch {
      alert("Rejection failed");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">👤 Pending User Approvals</h2>
      {pendingUsers.length === 0 ? (
        <p>No pending users.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingUsers.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">{user.course}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleApprove(user._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(user._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
