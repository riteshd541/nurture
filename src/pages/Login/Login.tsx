import React, { useState } from "react";
import {
  LogIn,
  UserPlus,
  Mail,
  Lock,
  User,
  Chrome,
  Apple,
} from "lucide-react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";

import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


export function Login() {
  const navigate = useNavigate();

  
  const [tabValue, setTabValue] = useState(0);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
const [toastMsg, setToastMsg] = useState("");


  

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setToastMsg("Welcome back!");
setToastOpen(true);
navigate("/dashboard");

  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
setToastMsg("Account created successfully!");
setToastOpen(true);
navigate("/dashboard");

  };

  const handleSSOLogin = (provider: string) => {
    setToastMsg(`Logging in with ${provider}...`);
setToastOpen(true);
navigate("/dashboard");

  };

 

  return (
    <div className="min-h-screen py-20 px-4 mt-5">
      <div className="max-w-md mx-auto">

        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#89CFF0] to-[#FFB6C1] bg-clip-text text-transparent">
            Welcome to YouEvolve Nurture
          </h1>
          <p className="text-gray-600">Your journey to wellness starts here</p>
        </div>

        
        <Card sx={{ borderRadius: "16px", boxShadow: 4 }}>
          <CardHeader
            title="Authentication"
            subheader="Login or create a new account"
          />

          <CardContent>
            
            <Tabs
              value={tabValue}
              onChange={(e, val) => setTabValue(val)}
              centered
              sx={{ mb: 3 }}
            >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>

           
            {tabValue === 0 && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    fullWidth
                    placeholder="your.email@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Mail className="mr-2 text-gray-400" size={20} />
                      ),
                    }}
                    required
                  />
                </div>

                <div>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    fullWidth
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Lock className="mr-2 text-gray-400" size={20} />
                      ),
                    }}
                    required
                  />
                </div>

                <div className="text-right">
                  <Button variant="text" size="small">
                    Forgot Password?
                  </Button>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
                    color: "white",
                    borderRadius: "12px",
                  }}
                >
                  <LogIn className="mr-2" size={20} />
                  Login
                </Button>

                <Divider sx={{ my: 3 }}>Or continue with</Divider>

                <div className="space-y-3">
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleSSOLogin("Google")}
                  >
                    <Chrome className="mr-2" size={20} />
                    Continue with Google
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleSSOLogin("Apple")}
                  >
                    <Apple className="mr-2" size={20} />
                    Continue with Apple
                  </Button>
                </div>
              </form>
            )}

            
            {tabValue === 1 && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <FormLabel>Full Name</FormLabel>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <User className="mr-2 text-gray-400" size={20} />
                      ),
                    }}
                    required
                  />
                </div>

                <div>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    fullWidth
                    type="email"
                    placeholder="your.email@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Mail className="mr-2 text-gray-400" size={20} />
                      ),
                    }}
                    required
                  />
                </div>

                <div>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    fullWidth
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Lock className="mr-2 text-gray-400" size={20} />
                      ),
                    }}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
                    color: "white",
                    borderRadius: "12px",
                  }}
                >
                  <UserPlus className="mr-2" size={20} />
                  Create Account
                </Button>

                <Divider sx={{ my: 3 }}>Or sign up with</Divider>

                <div className="space-y-3">
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleSSOLogin("Google")}
                  >
                    <Chrome className="mr-2" size={20} />
                    Sign up with Google
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleSSOLogin("Apple")}
                  >
                    <Apple className="mr-2" size={20} />
                    Sign up with Apple
                  </Button>
                </div>
              </form>
            )}
          </CardContent>

          <CardActions sx={{ mt: 2 }}></CardActions>
        </Card>

        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            By continuing, you agree to our{" "}
            <span className="text-[#89CFF0] cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#89CFF0] cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    
    <Snackbar
  open={toastOpen}
  autoHideDuration={3000}
  onClose={() => setToastOpen(false)}
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
>
  <Alert
    onClose={() => setToastOpen(false)}
    severity="success"
    variant="filled"
    sx={{ width: "100%" }}
  >
    {toastMsg}
  </Alert>
</Snackbar>
</div>
    
  );
}
