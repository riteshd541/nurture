import {  ShoppingCart, Sparkles, User } from "lucide-react";
// import { Baby } from "lucide-react";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 px-6 py-4">
          <div className="flex justify-between items-center">

            
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              {/* <div className="bg-gradient-to-br from-[#89CFF0] to-[#FFB6C1] p-2.5 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow">
                <Baby className="h-6 w-6 text-white" />
              </div> */}
              <img src="/header-logo.png" alt="logo" className="h-16 w-16" />
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] bg-clip-text text-transparent">
                  YouEvolve
                </span>
                <p className="text-xs text-gray-500 -mt-1">Nurture</p>
              </div>
              
            </div>

            
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-50/50 rounded-2xl p-1">
              <Button  onClick={() => navigate("/")} className="rounded-xl">
                Home
              </Button>
              <Button  onClick={() => navigate("/products")} className="rounded-xl">
                Shop
              </Button>
              <Button  onClick={() => navigate("/services")} className="rounded-xl">
                Experts
              </Button>
              <Button  onClick={() => navigate("/blog")} className="rounded-xl">
                Learn
              </Button>

              <Button  onClick={() => navigate("/ai-features")} className="rounded-xl">
                <Sparkles className="h-4 w-4 mr-1" />
                AI
              </Button>
            </nav>

            
            <div className="flex items-center space-x-2">
              <Button
                
                
                className="relative rounded-xl"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              <Button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
