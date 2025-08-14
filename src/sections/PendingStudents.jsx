import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function PendingStudents() {
  const { enqueueSnackbar } = useSnackbar();
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    const { data } = await axiosInstance.get("/admin/pending-students");
    setStudents(data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleApprove = async (id) => {
    try {
      const { data } = await axiosInstance.post(`/admin/approve-student/${id}`);
      enqueueSnackbar(data.message, { variant: "success" });
      fetchData();
      setSelected(null);
    } catch (err) {
      enqueueSnackbar("Approve failed", { variant: "error" });
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/admin/reject-student/${id}`);
      enqueueSnackbar(data.message, { variant: "success" });
      fetchData();
      setSelected(null);
    } catch (err) {
      enqueueSnackbar("Delete failed", { variant: "error" });
    }
  };

  const handleSearch = async () => {
    const { data } = await axiosInstance.get(`/admin/search-student?q=${query}`);
    setStudents(data);
  };

  return (
    <div className="flex gap-4">
      <div className="w-2/3">
        <div className="flex gap-2 mb-2">
          <input className="border px-2 py-1 flex-1" placeholder="Search by roll/email/mobile/aadhar/name/fname" value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button onClick={handleSearch} className="btn-primary">Search</button>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>Name</th><th>Course</th><th>Branch</th><th>Email</th><th>Temp Roll</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s=>(
              <tr key={s.ID} onClick={()=>setSelected(s)} className="cursor-pointer hover:bg-blue-50">
                <td>{s.Name}</td><td>{s.Course}</td><td>{s.Branch}</td><td>{s.Email}</td><td>{s.TempRoll}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/3 border-l pl-2">
        {selected ? (
          <div>
            <h3 className="font-bold">{selected.Name}</h3>
            <p>Email: {selected.Email}</p>
            <p>Mobile: {selected.Contact}</p>
            <p>Course: {selected.Course} / {selected.Branch}</p>
            <p>Temp Roll: {selected.TempRoll}</p>
            <button className="bg-green-600 text-white px-2 py-1 mr-2" onClick={()=>handleApprove(selected.ID)}>Approve</button>
            <button className="bg-red-600 text-white px-2 py-1" onClick={()=>handleDelete(selected.ID)}>Delete</button>
          </div>
        ) : <p>Select a student to view details</p>}
      </div>
    </div>
  );
}
