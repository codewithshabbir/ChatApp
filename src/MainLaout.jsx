// MainLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;