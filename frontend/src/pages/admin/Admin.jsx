import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import AdminHeader from "../../components/AdminHeader";
import { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { Toaster } from "react-hot-toast";

function Admin() {
  const { fetchUserDetails, currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (currentUser?.role !== "ADMIN") {
    return navigate("/");
  }

  return (
    <div className="">
      <AdminHeader />
      <div className="flex flex-row">
        <aside>
          <ProSidebarProvider>
            <Sidebar />
          </ProSidebarProvider>
        </aside>
        <main className="flex-1">
          <Outlet />
          <Toaster />
        </main>
      </div>
    </div>
  );
}

export default Admin;
