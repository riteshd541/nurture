import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.css";
import { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;   
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper bg-bg text-foreground">
      <Header />

      <main className="layout-content bg-bg text-foreground">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
