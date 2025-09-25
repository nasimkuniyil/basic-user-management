import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col gap-5">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;
