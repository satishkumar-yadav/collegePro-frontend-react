import { useEffect, useState } from "react";
import { getEvents } from "../api";
 
export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await getEvents();
      setEvents(data);
    };
    fetchEvents();
    const interval = setInterval(fetchEvents, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-2 h-full overflow-y-auto">
      <h3 className="font-semibold text-yellow-900 mb-2">Latest Events</h3>
      <ul>
        {events.map(n => (
          <li key={n.id} className="py-1 border-b border-yellow-200 text-sm">{n.text}</li>
        ))}
      </ul>
    </div>
  );
}
