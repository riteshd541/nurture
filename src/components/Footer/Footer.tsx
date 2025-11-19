import { Baby, Phone } from "lucide-react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="mt-32 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#89CFF0]/10 via-[#FFB6C1]/10 to-transparent rounded-3xl border border-gray-200/50 p-12">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-[#89CFF0] to-[#FFB6C1] p-3 rounded-2xl shadow-md">
                  <Baby className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] bg-clip-text text-transparent">
                  YouEvolve Nurture
                </span>
              </div>

              <p className="text-gray-600 mb-6 max-w-md">
                Your trusted companion for pregnancy, parenting, and maternal wellness.
              </p>

              <div className="flex space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#89CFF0] to-[#5FB3D8] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9BAA] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">𝕏</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#89CFF0] to-[#5FB3D8] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>

           
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Explore</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p onClick={() => navigate("/about")} className="cursor-pointer hover:text-[#89CFF0]">About Us</p>
                <p onClick={() => navigate("/partnerships")} className="cursor-pointer hover:text-[#89CFF0]">Partnerships</p>
                <p onClick={() => navigate("/monitoring")} className="cursor-pointer hover:text-[#89CFF0]">Monitoring</p>
                <p onClick={() => navigate("/community")} className="cursor-pointer hover:text-[#89CFF0]">Community</p>
              </div>
            </div>

            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Get Help</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>Emergency: <span className="text-[#FFB6C1] font-medium">1800-XXX-XXXX</span></p>
                <p>Support: <span className="text-[#89CFF0] font-medium">support@youevolve.com</span></p>

                <Button
                  className="mt-4 w-full bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => navigate("/contact")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 YouEvolve Nurture. Privacy • Terms • HIPAA Compliance
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
