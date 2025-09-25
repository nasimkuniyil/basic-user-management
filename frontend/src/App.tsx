import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import LoginPage from "./pages/user/LoginPage";
import SignupPage from "./pages/user/SignupPage";
import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./layout/adminLayout/AdminLayout";
import UserLayout from "./layout/userLayout/UserLayout";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard/>}/>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
