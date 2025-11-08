import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />

      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
