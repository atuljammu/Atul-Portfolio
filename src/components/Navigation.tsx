
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Contact, FileText, Briefcase, Award } from "lucide-react";

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "About", path: "/about", icon: User },
  { title: "Contact", path: "/contact", icon: Contact },
  { title: "Projects", path: "/projects", icon: Briefcase },
  { title: "CV", path: "/cv", icon: FileText },
  { title: "Certificates", path: "/certificates", icon: Award },
];

export const Navigation = () => {
  // Wrap the useLocation hook in a try-catch to handle cases where it might be used outside Router context
  let currentPath = "/";
  try {
    const location = useLocation();
    currentPath = location.pathname;
  } catch (error) {
    console.warn("Navigation component used outside Router context");
    // Default to home path when not in Router context
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-md z-20">
      <ul className="flex justify-center space-x-10 py-4 px-6 text-white">
        {navItems.map(({ title, path, icon: Icon }) => {
          const isActive = currentPath === path;
          return (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center gap-1 text-lg font-semibold border-b-2 pb-1 ${
                  isActive ? "border-blue-400 text-blue-400" : "border-transparent hover:text-blue-300 hover:border-blue-300"
                } transition-colors duration-200`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon size={18} />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
