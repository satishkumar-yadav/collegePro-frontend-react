// src/context/AuthContext.jsx
import jwt_decode from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userInfo, setUserInfo] = useState({ role: '', name: '', email: '', course: '' });

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUserInfo({
          email: decoded.email,
          role: decoded.role,
          course: decoded.course,
          name: decoded.name || '', // fallback
        });
      } catch (err) {
        console.error("Invalid token", err);
        logout();
      }
    }
  }, [token]);

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUserInfo({});
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{
      token,
      isLoggedIn: !!token,
      ...userInfo,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
