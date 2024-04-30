// components/Layout.js
import React from "react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-64 h-full shadow-md bg-white px-1 absolute">
        <ul className="relative">
          <li className="relative">
            <Link
              href="/sign-up"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              Sign Up Form
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/intake"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              Patient Intake Form
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="flex-1 p-10 text-2xl font-bold">{children}</div>
    </div>
  );
};

export default Layout;
