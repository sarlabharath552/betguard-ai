import { Link } from "react-router-dom";
import { Home, Search, LogOut, Moon } from "lucide-react";

export default function Layout({ children }) {

  // ✅ Dark mode toggle function (MUST be inside component, before return)
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 flex flex-col justify-between">
        
        <div>
          <h2 className="text-2xl font-bold mb-6">BetGuard AI</h2>

          <nav className="flex flex-col gap-4">
            <Link to="/dashboard" className="flex gap-2 hover:text-blue-400">
              <Home size={18} /> Dashboard
            </Link>

            <Link to="/detect" className="flex gap-2 hover:text-blue-400">
              <Search size={18} /> Detect
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-3">
          
          {/* 🌙 Dark Mode Button */}
          <button
            onClick={toggleDark}
            className="flex gap-2 bg-gray-700 p-2 rounded hover:bg-gray-600"
          >
            <Moon size={18} /> Dark Mode
          </button>

          {/* 🚪 Logout */}
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="flex gap-2 text-red-400"
          >
            <LogOut size={18} /> Logout
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}