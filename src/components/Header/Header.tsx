import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="main-header">
        <img
          className="logo"
          onClick={() => navigate("/")}
          src="/header-logo.png"
          alt="logo"
        />

        <nav className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/programs")}>Programs</button>
          <button onClick={() => navigate("/pricing")}>Pricing</button>
          <button onClick={() => navigate("/event")}>Event</button>
          <button onClick={() => navigate("/blog")}>Blog</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </nav>

        <div className="hamburger" onClick={() => setOpenMenu(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <DrawerMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default Header;
