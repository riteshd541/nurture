import React, { useState } from "react";
import { Calendar, Video, Star, CheckCircle, Search, Award } from "lucide-react";

import { services, packages, Service } from "./services";
import { BlurImage } from "../Home/BlurImage";
import { useMuiToast}  from "./useMuiToast";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Chip,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";


import { motion } from "framer-motion";

export function Expert() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("all");

  const { showToast, ToastComponent } = useMuiToast();

  const bookService = (service: Service) => {
    showToast(`Booking ${service.name}...`, "success");
  };

  const filteredServices = services.filter((service) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      service.name.toLowerCase().includes(q) ||
      service.specialty.toLowerCase().includes(q);

    const matchesType = selectedService === "all" || service.type === selectedService;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen py-20 px-4 mt-5">
    <Box sx={{ p: 4 }}>
      {/* HEADER */}
      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Services Marketplace
        </Typography>
        <Typography variant="body1" color="gray">
          Connect with expert doctors, counsellors, and care providers
        </Typography>
      </Box>

      {/* SEARCH */}
      <Box sx={{ maxWidth: 500, mx: "auto", mb: 4, position: "relative" }}>
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <TextField
          fullWidth
          placeholder="Search for experts..."
          sx={{ pl: 4 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      {/* FILTER TABS */}
      <Tabs
        value={selectedService}
        onChange={(_, v) => setSelectedService(v)}
        variant="scrollable"
        scrollButtons
        sx={{ mb: 4 }}
      >
        <Tab value="all" label="All" />
        <Tab value="doctor" label="Doctors" />
        <Tab value="counsellor" label="Counsellors" />
        <Tab value="nutritionist" label="Nutritionists" />
        <Tab value="physiotherapist" label="Physiotherapists" />
        <Tab value="therapist" label="Therapists" />
        <Tab value="nanny" label="Nanny" />
      </Tabs>

      {/* SERVICES */}
     
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredServices.map((service) => (
    <div key={service.id} className="w-full border border-gray-200 rounded-3xl">
      <motion.div>
        <Card sx={{ padding: 2 }}>
          <CardHeader
            title={
              <Box display="flex" alignItems="center">
                <BlurImage
                  src={service.image}
                  alt={service.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                {service.verified && (
                  <CheckCircle className="text-green-500 ml-[-18px] mt-[45px]" />
                )}

                <Box ml={2}>
                  <Typography variant="h6">{service.name}</Typography>
                  <Typography variant="body2" color="gray">
                    {service.specialty}
                  </Typography>
                  <Chip
                    label={service.experience}
                    sx={{ mt: 1, background: "#C4E7F5", color: "#89CFF0" }}
                  />
                </Box>
              </Box>
            }
          />

          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Star className="text-yellow-400" />
              <Typography ml={1}>{service.rating}</Typography>
              <Typography ml={1} color="gray">
                ({service.reviews})
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">₹{service.price}</Typography>
              <Chip
                label={service.availability}
                color="success"
                variant="outlined"
              />
            </Box>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
                color: "white",
              }}
              onClick={() => bookService(service)}
            >
              <Calendar style={{ marginRight: 8 }} /> Book Now
            </Button>

            <Button variant="outlined" sx={{ marginLeft: "8px" }}>
              <Video />
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </div>
  ))}
</div>

{/* PACKAGES */}
<div className="mt-12">
  <Typography variant="h5" fontWeight="bold" mb={3}>
    Package Subscriptions
  </Typography>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {packages.map((pkg) => (
      <div key={pkg.id}>
        <Card sx={{ padding: 2 }}>
          <CardHeader
            title={pkg.name}
            subheader={pkg.description}
            avatar={<Award className="text-[#FFB6C1]" />}
          />

          <CardContent>
            <Typography variant="h5">
              ₹{pkg.price.toLocaleString()}
            </Typography>
            <Typography color="gray">/ {pkg.duration}</Typography>

            <Box mt={2}>
              {pkg.features.map((feature, i) => (
                <Box key={i} display="flex" alignItems="center" mb={1}>
                  <CheckCircle className="text-green-500 mr-2" />
                  <Typography>{feature}</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>

          <CardActions>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
                color: "white",
              }}
            >
              Subscribe Now
            </Button>
          </CardActions>
        </Card>
      </div>
    ))}
  </div>
</div>




      {/* PURE MUI TOAST */}
      <ToastComponent />
    </Box>
    </div>
  );
}
