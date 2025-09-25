import { Outlet } from "react-router-dom";
import Header from "./Header";

const UserLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col justify-between">
      <Header />
      <Outlet />
    </div>
  );
};

export default UserLayout;
