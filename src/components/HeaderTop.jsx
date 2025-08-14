import logo from "../assets/logo.png";
export default function HeaderTop() {
  return (
    <div className="w-full bg-blue-900 text-white text-sm flex justify-between px-4 py-2">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-8" />
        <span>My Engineering College</span>
      </div>
      <div className="flex gap-6">
        <span>📞 +91-1234567890</span>
        <span>📧 info@college.com</span>
      </div>
    </div>
  );
}
