import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import AdminHeader from "../../components/AdminHeader";

function Admin() {
  return (
    <div className="">
      <AdminHeader />
      <div className="flex flex-row">
        <aside>
          <Sidebar />
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Admin;
