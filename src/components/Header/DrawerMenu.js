import { useNavigate } from "react-router-dom";
import "./Header.css";

const DrawerMenu = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={`drawer-menu ${open ? "open" : ""}`}>
      <div className="drawer-overlay" onClick={onClose}></div>

      <div className="drawer-content">
        <button onClick={onClose} className="close-btn">
          ✕
        </button>

        <p
          onClick={() => {
            navigate("/");
            onClose();
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            navigate("/about");
            onClose();
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            navigate("/programs");
            onClose();
          }}
        >
          Programs
        </p>
        <p
          onClick={() => {
            navigate("/blog");
            onClose();
          }}
        >
          Blog
        </p>
        <p
          onClick={() => {
            navigate("/login");
            onClose();
          }}
        >
          Login
        </p>
      </div>
    </div>
  );
};

export default DrawerMenu;
