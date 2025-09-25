import { Outlet } from "react-router-dom";
import Header from "./Header";

const AdminLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col gap-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
