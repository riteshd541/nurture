import { Baby, Phone } from "lucide-react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="mt-32 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container: use semantic border + gradient overlay that works in dark/light */}
        <div className="rounded-3xl p-12"
             style={{
               background: "linear-gradient(180deg, rgba(137,207,240,0.06), rgba(255,182,193,0.04))",
               border: "1px solid var(--color-border)",
             }}
        >

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[linear-gradient(135deg,var(--baby-blue),var(--baby-pink))] p-3 rounded-2xl shadow-md">
                  <Baby className="h-6 w-6 text-white" />
                </div>
                <span
                  className="text-xl font-bold bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(90deg, var(--baby-blue), var(--baby-pink))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  YouEvolve Nurture
                </span>
              </div>

              <p className="mb-6 max-w-md" style={{ color: "var(--color-muted-foreground)" }}>
                Your trusted companion for pregnancy, parenting, and maternal wellness.
              </p>

              <div className="flex space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,var(--baby-blue),var(--baby-blue-dark))] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,var(--baby-pink),var(--baby-pink-dark))] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">𝕏</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,var(--baby-blue),var(--baby-blue-dark))] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4" style={{ color: "var(--color-foreground)" }}>Explore</h3>
              <div className="space-y-3 text-sm">
                <p onClick={() => navigate("/about")} className="cursor-pointer hover:text-[color:var(--baby-blue)]" style={{ color: "var(--color-muted-foreground)" }}>About Us</p>
                <p onClick={() => navigate("/partnerships")} className="cursor-pointer hover:text-[color:var(--baby-blue)]" style={{ color: "var(--color-muted-foreground)" }}>Partnerships</p>
                <p onClick={() => navigate("/monitoring")} className="cursor-pointer hover:text-[color:var(--baby-blue)]" style={{ color: "var(--color-muted-foreground)" }}>Monitoring</p>
                <p onClick={() => navigate("/community")} className="cursor-pointer hover:text-[color:var(--baby-blue)]" style={{ color: "var(--color-muted-foreground)" }}>Community</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4" style={{ color: "var(--color-foreground)" }}>Get Help</h3>
              <div className="space-y-3 text-sm">
                <p style={{ color: "var(--color-muted-foreground)" }}>
                  Emergency: <span className="font-medium" style={{ color: "var(--baby-pink)" }}>1800-XXX-XXXX</span>
                </p>
                <p style={{ color: "var(--color-muted-foreground)" }}>
                  Support: <span className="font-medium" style={{ color: "var(--baby-blue)" }}>support@youevolve.com</span>
                </p>

                <Button
                  className="mt-4 w-full rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => navigate("/contact")}
                  sx={{
                    background: "linear-gradient(90deg, var(--baby-blue), var(--baby-pink))",
                    color: "var(--primary-foreground)",
                    textTransform: "none",
                    padding: "10px 12px",
                    borderRadius: "12px",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
              © 2025 YouEvolve Nurture. <span className="cursor-pointer hover:text-[color:var(--baby-blue)]">Privacy</span> • <span className="cursor-pointer hover:text-[color:var(--baby-blue)]">Terms</span> • <span className="cursor-pointer hover:text-[color:var(--baby-blue)]">HIPAA Compliance</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
