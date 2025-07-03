import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  FileText,
  Briefcase,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Logo from "../assets/logo-white.png";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={18} /> },
    { name: "Homepage Editor", path: "/admin/home", icon: <Home size={18} /> },
    {
      name: "Portfolio",
      path: "/admin/portfolio",
      icon: <Briefcase size={18} />,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 md:static top-0 left-0 h-full w-64 bg-[#1f2937] text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="p-6 text-2xl font-bold border-b border-white/20 flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-32" />
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-white text-[#000000] font-semibold"
                        : "hover:bg-white/10 text-white/90"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/20 text-sm opacity-75">
          © 2025 Residem
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-gray-50">
        <header className="bg-white p-4 shadow-sm flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center gap-4">
            {/* Hamburger Icon (Mobile) */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Admin</span>
            <LogOut size={16} className="cursor-pointer hover:text-red-500" />
          </div>
        </header>
        <section className="p-6">{children}</section>
      </main>
    </div>
  );
};

export default AdminLayout;
