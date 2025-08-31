import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sideBar";
import Navbar from "../components/navbar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1  bg-white overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
