import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ setAuth }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
   <div className="flex min-h-[100dvh]">
     <Sidebar
  openSidebar={openSidebar}
  setOpenSidebar={setOpenSidebar}
  setAuth={setAuth}
/>

      <div className="flex-1 flex flex-col">
        <Navbar setOpenSidebar={setOpenSidebar} />

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
