import axiosInstance from "./axiosInstance";

export const loginUser = (data) => axiosInstance.post("/auth/login", data);
export const registerStudentTemp = (data) => axiosInstance.post("/auth/register/student", data);
export const checkDuplicate = (field, value) => axiosInstance.get(`/auth/check-duplicate?field=${field}&value=${value}`);
export const getCourses = () => axiosInstance.get("/courses");
export const getNotices = () => axiosInstance.get("/notices");

export const getEvents = () => axiosInstance.get("/events");
export const uploadDocs = (formData) =>
  axiosInstance.post("/docs/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
