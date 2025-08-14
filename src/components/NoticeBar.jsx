import { useEffect, useState } from "react";
import { getNotices } from "../api";

export default function NoticeBar() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const { data } = await getNotices();
      setNotices(data);
    };
    fetchNotices();
    const interval = setInterval(fetchNotices, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-2 h-full overflow-y-auto">
      <h3 className="font-semibold text-yellow-900 mb-2">Latest Notices 📢</h3>
      <ul>
        {notices.map(n => (
          <li key={n.id} className="py-1 border-b border-yellow-200 text-sm">{n.text}</li>
        ))}
      </ul>
    </div>
  );
}
