//  Step 2: Utility to Get Role from JWT

import jwtDecode from 'jwt-decode';

export function getUserFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    return jwtDecode(token); // {email, role, course, exp...}
  } catch {
    return null;
  }
}

export function isAdmin() {
  const user = getUserFromToken();
  return user?.role === "admin";
}



/*

✅ Admin Login Restriction (React + JWT)
🧠 Plan:
Decode JWT in React

Check role === "admin" on /admin

Redirect if not admin

*/