import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};


export default MainLayout;
