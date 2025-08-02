import axios from "axios";
import { useState } from "react";

export default function AdminAddRecords() {
  const [placement, setPlacement] = useState({ student: "", company: "", role: "" });
  const [achievement, setAchievement] = useState({ student: "", title: "", event: "" });
  const [msg, setMsg] = useState("");

  const handlePlacementSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-backend-url.com/api/placements", placement);
      setMsg(res.data.message || "Placement added successfully.");
    } catch (err) {
      setMsg("Failed to add placement.");
    }
  };

  const handleAchievementSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-backend-url.com/api/achievements", achievement);
      setMsg(res.data.message || "Achievement added successfully.");
    } catch (err) {
      setMsg("Failed to add achievement.");
    }
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-bold">Add Placement Record</h2>
      <form onSubmit={handlePlacementSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Student Name" value={placement.student} onChange={e => setPlacement({ ...placement, student: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Company" value={placement.company} onChange={e => setPlacement({ ...placement, company: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Role" value={placement.role} onChange={e => setPlacement({ ...placement, role: e.target.value })} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Add Placement</button>
      </form>

      <h2 className="text-xl font-bold">Add Achievement</h2>
      <form onSubmit={handleAchievementSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Student Name" value={achievement.student} onChange={e => setAchievement({ ...achievement, student: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Title" value={achievement.title} onChange={e => setAchievement({ ...achievement, title: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Event" value={achievement.event} onChange={e => setAchievement({ ...achievement, event: e.target.value })} />
        <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Add Achievement</button>
      </form>

      {msg && <p className="text-sm text-purple-600">{msg}</p>}
    </div>
  );
}
