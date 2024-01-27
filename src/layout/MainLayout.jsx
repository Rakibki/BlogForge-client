import Footer from "../shared/footer/Footer";
import Navber from "../shared/navber/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
