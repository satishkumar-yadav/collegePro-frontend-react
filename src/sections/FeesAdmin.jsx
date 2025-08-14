import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function FeesAdmin() {
  const [records, setRecords] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchFees = async () => {
    const { data } = await axiosInstance.get("/admin/fees/dues");
    setRecords(data);
  };

  const payFee = async (studentId) => {
    try {
      await axiosInstance.post("/admin/fees/pay", { studentId });
      enqueueSnackbar("Fees paid", { variant: "success" });
      fetchFees();
    } catch {
      enqueueSnackbar("Error paying fees", { variant: "error" });
    }
  };

  useEffect(() => { fetchFees(); }, []);

  return (
    <div>
      <h3 className="font-bold mb-2">Pending Fees</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Name</th>
            <th>Roll No</th>
            <th>Amount Due</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map(r => (
            <tr key={r.ID}>
              <td>{r.Name}</td>
              <td>{r.RollNo}</td>
              <td>₹{r.AmountDue}</td>
              <td><button onClick={() => payFee(r.ID)} className="bg-blue-500 text-white px-2 py-1">Pay</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
