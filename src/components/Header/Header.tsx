import { ShoppingCart, Sparkles, User, Menu } from "lucide-react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (val: boolean) => () => setOpen(val);


  const navItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: "Experts", to: "/services" },
    { label: "Learn", to: "/blog" },
    { label: "AI", to: "/ai-features", icon: <Sparkles className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 px-6 py-4">
          <div className="flex justify-between items-center">

            
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <img src="/header-logo.png" alt="logo" className="h-14 w-14" />
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] bg-clip-text text-transparent">
                  YouEvolve
                </span>
                <p className="text-xs text-gray-500 -mt-1">Nurture</p>
              </div>
            </div>

           
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-50/50 rounded-2xl p-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.to)}
                  className="rounded-xl"
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </nav>

            
            <div className="flex items-center space-x-2">
              <Button className="relative rounded-xl" onClick={() => navigate("/cart")}>
                <ShoppingCart className="h-5 w-5" />
              </Button>

              <Button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>

              
              <div className="lg:hidden">
                <IconButton onClick={toggleDrawer(true)}>
                  <Menu />
                </IconButton>
              </div>
            </div>

          </div>
        </div>
      </div>

     
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="w-64 py-6 px-4 space-y-4">
          {navItems.map((item) => (
            <Button
              key={item.label}
              fullWidth
              onClick={() => {
                navigate(item.to);
                setOpen(false);
              }}
              className="justify-start"
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
