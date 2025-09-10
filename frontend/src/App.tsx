import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id/edit" element={<EditProfile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
