import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminApprovals() {
  const [pendingUsers, setPendingUsers] = useState([]);

  const fetchPending = async () => {
    try {
      const res = await axios.get("https://your-backend-url.com/api/admin/approvals", {
        withCredentials: true,
      });
      setPendingUsers(res.data);
    } catch (err) {
      console.error("Error fetching approvals:", err);
    }
  };

  const approveUser = async (id) => {
    try {
      await axios.post(
        `https://your-backend-url.com/api/admin/approve/${id}`,
        {},
        { withCredentials: true }
      );
      alert("User approved!");
      fetchPending(); // refresh
    } catch (err) {
      console.error("Approval failed:", err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">👥 Pending User Approvals</h2>
      {pendingUsers.length === 0 ? (
        <p>No pending users.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingUsers.map((user) => (
              <tr key={user._id}>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.role}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => approveUser(user._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Approve
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
