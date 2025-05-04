import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;