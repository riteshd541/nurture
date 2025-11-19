import React from "react";
import {
  Play,
  Star,
  Smartphone,
  Brain,
  Activity,
  Shield,
  Users,
  Building2,
  ChevronRight,
  Heart,
  Sparkles,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useNavigate } from "react-router-dom";


import { BlurImage } from "./BlurImage";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className = "" }: BadgeProps) => (
  <span
    className={`inline-flex items-center text-sm font-medium px-4 py-1.5 rounded-full ${className}`}
  >
    {children}
  </span>
);

export function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description: "Smart wellness scoring and personalized recommendations",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Track vitals, sleep, and baby activity 24/7",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Network",
      description: "Connect with verified doctors and specialists",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "HIPAA-compliant data protection",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "New Mother",
      content:
        "The AI wellness score gave me peace of mind throughout my pregnancy. The expert consultations were incredibly helpful!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Obstetrician",
      content:
        "Outstanding platform for monitoring high-risk pregnancies. The real-time alerts have been invaluable.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Rahul & Kavita",
      role: "Parents",
      content:
        "Partner mode helped me support my wife better. The baby cry analyzer is amazing!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <div className="min-h-screen mt-[100px]">

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/5 via-[#FFB6C1]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">

            {/* LEFT */}
            <div className="space-y-8">
              <Badge className="bg-[#89CFF0]/10 text-[#89CFF0]">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                AI-Powered Maternity Care
              </Badge>

              <h1 className="text-6xl lg:text-7xl font-bold">
                Your Journey,
                <span className="block bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] bg-clip-text text-transparent">
                  Beautifully Supported
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                From pregnancy to parenting, experience complete care with AI monitoring,
                expert guidance, and real-time insights.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
                    borderRadius: "16px",
                    padding: "14px 32px",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{ borderRadius: "16px", padding: "14px 32px" }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#89CFF0] to-[#5FB3D8] bg-clip-text text-transparent">
                    50K+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Happy Mothers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#FFB6C1] to-[#FF9BAA] bg-clip-text text-transparent">
                    500+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Expert Doctors</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#89CFF0] to-[#5FB3D8] bg-clip-text text-transparent">
                    98%
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative lg:h-[600px]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <BlurImage
                  src="https://images.unsplash.com/photo-1667821350151-cb3acb6b9101"
                  alt="Happy Pregnant Woman"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOAT CARD */}
              <div className="hidden lg:block absolute bottom-8 left-0 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#89CFF0] to-[#5FB3D8] p-4 rounded-xl">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Wellness Score</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] bg-clip-text text-transparent">
                      94/100
                    </p>
                    <p className="text-xs text-green-600 flex items-center">
                      <Zap className="h-3 w-3 mr-1" />
                      Excellent Health
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#89CFF0]/10 text-[#89CFF0]">Features</Badge>

            <h2 className="text-5xl font-bold mb-4">Everything You Need</h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools for every stage of motherhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card
                key={i}
                className="shadow-lg rounded-3xl hover:shadow-xl transition-all"
                sx={{ borderRadius: "24px" }}
              >
                <CardContent className="p-8">
                  <div className="bg-[#89CFF0]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    {f.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#89CFF0]/5 via-[#FFB6C1]/5 to-transparent rounded-3xl p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <BlurImage
                src="https://images.unsplash.com/photo-1645578734076-60cf69653a52"
                alt="AI Monitoring"
                className="rounded-3xl shadow-2xl"
              />

              {/* Text */}
              <div className="space-y-8">
                <Badge className="bg-[#89CFF0]/20 text-[#89CFF0]">
                  <Sparkles className="h-4 w-4 inline mr-2" />
                  AI Technology
                </Badge>

                <h2 className="text-5xl font-bold">Smart Monitoring, Smarter Care</h2>

                <p className="text-xl text-gray-600">
                  Real-time insights & predictive analytics for mother and baby.
                </p>

                {[
                  "Mother Wellness Score",
                  "Baby Cry Analyzer",
                  "Predictive Insights",
                ].map((txt, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-[#89CFF0] p-3 rounded-xl text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-gray-600">{txt}</p>
                  </div>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
                    borderRadius: "20px",
                    padding: "12px 28px",
                  }}
                  onClick={() => navigate("/ai-features")}
                >
                  Explore AI Features
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FFB6C1]/10 text-[#FFB6C1]">Testimonials</Badge>
            <h2 className="text-5xl font-bold mb-4">Loved by Families</h2>
            <p className="text-xl text-gray-600">Real stories from mothers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="shadow-lg rounded-3xl hover:shadow-xl"
                sx={{ borderRadius: "24px" }}
              >
                <CardContent className="p-8">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6">"{t.content}"</p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#89CFF0]/10 text-[#89CFF0]">Partnerships</Badge>
            <h2 className="text-5xl font-bold mb-4">
              Trusted by Leading Organizations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {["Apollo", "Fortis", "TCS", "Infosys", "Wipro"].map((p, i) => (
              <Card
                key={i}
                className="shadow-md rounded-2xl hover:shadow-lg text-center"
                sx={{ borderRadius: "20px" }}
              >
                <CardContent className="p-8">
                  <Building2 className="h-10 w-10 text-[#89CFF0] mx-auto mb-3" />
                  <p className="font-semibold text-gray-700">{p}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] rounded-3xl p-16 text-center shadow-2xl">

            <Smartphone className="h-20 w-20 mx-auto mb-8 text-white" />
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Begin?
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of mothers who trust YouEvolve.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "20px",
                  background: "white",
                  color: "#FF6F91",
                  padding: "12px 28px",
                }}
                onClick={() => navigate("/auth")}
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "20px",
                  color: "white",
                  borderColor: "white",
                  padding: "12px 28px",
                }}
                onClick={() => navigate("/contact")}
              >
                Contact Sales
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
