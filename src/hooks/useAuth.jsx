// src/hooks/useAuth.jsx  - custom hooks
import axios from "axios";
import { useEffect, useState } from "react";

export function useAuth2() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://your-backend-url.com/api/me", { withCredentials: true })
      .then(res => {
        setUser(res.data.user); // e.g. {role: 'admin'}
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  return { user, loading };
}
