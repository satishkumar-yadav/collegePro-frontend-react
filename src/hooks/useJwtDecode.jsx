//import jwtDecode from "jwt-decode";  -- gives error
import { jwtDecode } from "jwt-decode";

export default function useJwtDecode() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}
