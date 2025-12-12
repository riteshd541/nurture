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
    <div className="min-h-screen py-20 px-4 mt-5 bg-bg text-foreground">
      <Box sx={{ p: 4 }}>
        {/* HEADER */}
        <Box sx={{ maxWidth: "900px", mx: "auto", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "var(--color-foreground)" }}>
            Services Marketplace
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--color-muted-foreground)" }}>
            Connect with expert doctors, counsellors, and care providers
          </Typography>
        </Box>

        {/* SEARCH */}
        <Box sx={{ maxWidth: 500, mx: "auto", mb: 4, position: "relative" }}>
          <Search className="absolute left-3 top-3 h-5 w-5" style={{ color: "var(--color-muted-foreground)" }} />
          <TextField
            fullWidth
            placeholder="Search for experts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            sx={{
              pl: 4,
              input: { color: "var(--color-card-foreground)" },
              bgcolor: "transparent",
              borderRadius: 1,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--color-border)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--color-border)",
              },
            }}
          />
        </Box>

        {/* FILTER TABS */}
        <Tabs
          value={selectedService}
          onChange={(_, v) => setSelectedService(v)}
          variant="scrollable"
          scrollButtons
          sx={{
            mb: 4,
            "& .MuiTabs-indicator": { backgroundColor: "var(--baby-blue)" },
            color: "var(--color-muted-foreground)",
          }}
        >
          <Tab value="all" label="All" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
          <Tab value="doctor" label="Doctors" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
          <Tab value="counsellor" label="Counsellors" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
          <Tab value="nutritionist" label="Nutritionists" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
          <Tab value="physiotherapist" label="Physiotherapists" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
          <Tab value="therapist" label="Therapists" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
          <Tab value="nanny" label="Nanny" sx={{ color: "var(--color-muted-foreground)", "&.Mui-selected": { color: "var(--color-foreground)" }}} />
        </Tabs>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="w-full rounded-3xl" style={{ border: "1px solid var(--color-border)" }}>
              <motion.div>
                <Card
                  sx={{
                    padding: 2,
                    borderRadius: 3,
                    backgroundColor: "var(--color-card)",
                    color: "var(--color-card-foreground)",
                  }}
                >
                  <CardHeader
                    title={
                      <Box display="flex" alignItems="center">
                        <BlurImage
                          src={service.image}
                          alt={service.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />

                        {service.verified && (
                          <CheckCircle style={{ color: "var(--chart-2)" }} className="ml-[-18px] mt-[45px]" />
                        )}

                        <Box ml={2}>
                          <Typography sx={{ color: "var(--color-card-foreground)" }} variant="h6">{service.name}</Typography>
                          <Typography variant="body2" sx={{ color: "var(--color-muted-foreground)" }}>
                            {service.specialty}
                          </Typography>
                          <Chip
                            label={service.experience}
                            sx={{
                              mt: 1,
                              background: "var(--baby-blue-light)",
                              color: "var(--baby-blue)",
                              borderRadius: 2,
                            }}
                          />
                        </Box>
                      </Box>
                    }
                    sx={{ pb: 0 }}
                  />

                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Star style={{ color: "var(--chart-4)" }} />
                      <Typography ml={1} sx={{ color: "var(--color-card-foreground)" }}>{service.rating}</Typography>
                      <Typography ml={1} sx={{ color: "var(--color-muted-foreground)" }}>
                        ({service.reviews})
                      </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" mb={2}>
                      <Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>₹{service.price}</Typography>
                      <Chip
                        label={service.availability}
                        color="success"
                        variant="outlined"
                        sx={{
                          borderColor: "var(--color-border)",
                          color: "var(--color-card-foreground)",
                        }}
                      />
                    </Box>
                  </CardContent>

                  <CardActions sx={{ gap: 1, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: "linear-gradient(to right, var(--baby-blue), var(--baby-pink))",
                        color: "var(--primary-foreground)",
                        textTransform: "none",
                      }}
                      onClick={() => bookService(service)}
                    >
                      <Calendar style={{ marginRight: 8 }} /> Book Now
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        marginLeft: "8px",
                        borderColor: "var(--color-border)",
                        color: "var(--color-card-foreground)",
                      }}
                    >
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
          <Typography variant="h5" fontWeight="bold" mb={3} sx={{ color: "var(--color-foreground)" }}>
            Package Subscriptions
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id}>
                <Card sx={{ padding: 2, backgroundColor: "var(--color-card)", color: "var(--color-card-foreground)" }}>
                  <CardHeader
                    title={pkg.name}
                    subheader={pkg.description}
                    avatar={<Award style={{ color: "var(--baby-pink)" }} />}
                    sx={{ pb: 0 }}
                  />

                  <CardContent>
                    <Typography variant="h5" sx={{ color: "var(--color-card-foreground)" }}>
                      ₹{pkg.price.toLocaleString()}
                    </Typography>
                    <Typography sx={{ color: "var(--color-muted-foreground)" }}>/ {pkg.duration}</Typography>

                    <Box mt={2}>
                      {pkg.features.map((feature, i) => (
                        <Box key={i} display="flex" alignItems="center" mb={1}>
                          <CheckCircle style={{ color: "var(--chart-2)", marginRight: 8 }} />
                          <Typography sx={{ color: "var(--color-card-foreground)" }}>{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        background: "linear-gradient(to right, var(--baby-blue), var(--baby-pink))",
                        color: "var(--primary-foreground)",
                        textTransform: "none",
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
