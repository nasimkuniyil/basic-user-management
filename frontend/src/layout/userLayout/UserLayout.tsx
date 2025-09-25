import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
