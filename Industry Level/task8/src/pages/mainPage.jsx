import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
