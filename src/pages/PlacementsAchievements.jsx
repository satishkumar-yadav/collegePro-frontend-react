import axios from "axios";
import { useEffect, useState } from "react";

export default function PlacementsAchievements() {
  const [placements, setPlacements] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-url.com/api/placements")
      .then((res) => setPlacements(res.data))
      .catch((err) => console.error("Error fetching placements:", err));

    axios.get("https://your-backend-url.com/api/achievements")
      .then((res) => setAchievements(res.data))
      .catch((err) => console.error("Error fetching achievements:", err));
  }, []);

  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-3">🎯 Recent Placements</h2>
        {placements.length === 0 ? (
          <p>No placement data available.</p>
        ) : (
          <ul className="space-y-2">
            {placements.map((p, idx) => (
              <li key={idx} className="bg-blue-50 p-3 rounded shadow">
                <strong>{p.student}</strong> placed at <strong>{p.company}</strong> as <em>{p.role}</em>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">🏆 Student Achievements</h2>
        {achievements.length === 0 ? (
          <p>No achievements to show.</p>
        ) : (
          <ul className="space-y-2">
            {achievements.map((a, idx) => (
              <li key={idx} className="bg-green-50 p-3 rounded shadow">
                <strong>{a.student}</strong> won <em>{a.title}</em> in {a.event}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
