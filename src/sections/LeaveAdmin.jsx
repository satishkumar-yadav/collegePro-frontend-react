import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function LeaveAdmin() {
  const [requests, setRequests] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchLeaves = async () => {
    const { data } = await axiosInstance.get("/admin/leave/requests");
    setRequests(data);
  };

  const updateLeave = async (id, status) => {
    try {
      await axiosInstance.post(`/admin/leave/update`, { requestId: id, status });
      enqueueSnackbar("Leave status updated", { variant: "success" });
      fetchLeaves();
    } catch {
      enqueueSnackbar("Error updating leave", { variant: "error" });
    }
  };

  useEffect(() => { fetchLeaves(); }, []);

  return (
    <div>
      <h3 className="font-bold mb-2">Leave Requests</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100"><th>Name</th><th>Dates</th><th>Reason</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {requests.map(l => (
            <tr key={l.ID}>
              <td>{l.StudentName}</td>
              <td>{l.StartDate} to {l.EndDate}</td>
              <td>{l.Reason}</td>
              <td>{l.Status}</td>
              <td>
                <button onClick={() => updateLeave(l.ID, "approved")} className="bg-green-500 text-white px-2 py-1 mr-2">Approve</button>
                <button onClick={() => updateLeave(l.ID, "rejected")} className="bg-red-500 text-white px-2 py-1">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
