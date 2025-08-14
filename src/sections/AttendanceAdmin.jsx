import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function AttendanceAdmin() {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchStudents = async () => {
    const { data } = await axiosInstance.get("/admin/students");
    setStudents(data);
  };

  useEffect(() => { fetchStudents(); }, []);

  const markAttendance = async (id, status) => {
    try {
      await axiosInstance.post("/admin/attendance/mark", {
        studentId: id,
        date,
        status
      });
      enqueueSnackbar("Attendance marked", { variant: "success" });
    } catch {
      enqueueSnackbar("Error marking attendance", { variant: "error" });
    }
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Attendance for {date}</h3>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border px-2 py-1 mb-4"/>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Name</th>
            <th>Roll No</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.ID}>
              <td>{s.Name}</td>
              <td>{s.RollNo}</td>
              <td>
                <button onClick={() => markAttendance(s.ID, "present")} className="bg-green-500 text-white px-2 py-1 mr-2">Present</button>
                <button onClick={() => markAttendance(s.ID, "absent")} className="bg-red-500 text-white px-2 py-1">Absent</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
