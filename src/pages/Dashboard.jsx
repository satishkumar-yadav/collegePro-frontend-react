import useJwtDecode from "../hooks/useJwtDecode";

export default function Dashboard() {
  const user = useJwtDecode();

  if (!user) return <div>Please login to access dashboard.</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="font-bold text-lg mb-2">Welcome, {user.name || "User"}</h2>
      <p>Your role: <span className="font-mono border px-2 rounded bg-blue-100">{user.role}</span></p>
      {/* List dashboard options based on role */}
      <div className="mt-8">
        {user.role === "admin"
          ? <div>Admin panel here (approve applicants, manage courses etc.)</div>
          : user.role === "student"
            ? <div>Student dashboard: view courses, attendance, results, notices</div>
            : <div>Faculty dashboard: manage students, exams, view schedule</div>
        }
      </div>
    </div>
  );
}
