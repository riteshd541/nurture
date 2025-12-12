import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Chip,
  Tabs,
  Tab,
  Box,
  LinearProgress,
  TextareaAutosize,
  Paper,
} from "@mui/material";

import {
  Baby,
  Activity,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { LineChart } from "@mui/x-charts/LineChart";
import { RadarChart } from "@mui/x-charts/RadarChart";

export function AIFeatures() {
  const [cryAnalysis, setCryAnalysis] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("wellness");

  // DATA
  const wellnessScoreData = {
    overall: 94,
    sleep: 88,
    vitals: 96,
    mood: 92,
    activity: 90,
    nutrition: 95,
  };

  const weeklyTrend = [
    { day: "Mon", score: 89 },
    { day: "Tue", score: 91 },
    { day: "Wed", score: 88 },
    { day: "Thu", score: 93 },
    { day: "Fri", score: 92 },
    { day: "Sat", score: 95 },
    { day: "Sun", score: 94 },
  ];

  const aiRecommendations = [
    {
      category: "Sleep",
      icon: "😴",
      recommendation: "Your sleep quality improved!",
      priority: "low",
    },
    {
      category: "Nutrition",
      icon: "🥗",
      recommendation: "Increase iron intake (leafy greens).",
      priority: "medium",
    },
    {
      category: "Activity",
      icon: "🚶‍♀️",
      recommendation: "Add 5 mins prenatal yoga.",
      priority: "low",
    },
  ];

  const dailyRoutines = [
    { time: "07:00 AM", task: "Morning vitals check", status: "completed" },
    { time: "08:00 AM", task: "Prenatal vitamin", status: "completed" },
    { time: "09:00 AM", task: "Light breakfast", status: "completed" },
    { time: "10:00 AM", task: "Morning walk (30 min)", status: "pending" },
    { time: "12:00 PM", task: "Hydration check", status: "pending" },
  ];

  const babyMilestones = [
    {
      week: 24,
      milestone: "Baby can hear sounds",
      development: "Ear development complete",
      predicted: true,
    },
    {
      week: 25,
      milestone: "Regular sleep patterns",
      development: "Brain activity increases",
      predicted: true,
    },
    {
      week: 26,
      milestone: "Eyes begin to open",
      development: "Visual development progresses",
      predicted: true,
    },
  ];

  const analyzeBabyCry = () => {
    setCryAnalysis({
      type: "Hunger",
      confidence: 87,
      recommendations: [
        "Baby likely needs feeding",
        "Check last feeding time",
        "Ensure proper latch",
      ],
      alternativeCauses: ["Discomfort (13%)", "Tired (8%)", "Need burping (5%)"],
    });
  };

  const radarMetrics = ["Sleep", "Vitals", "Mood", "Activity", "Nutrition"];
  const radarScores = [88, 96, 92, 90, 95];

  

  return (
    <div className="max-w-7xl mx-auto mt-[100px]">
      <Box sx={{ p: 4 }}>
        {/* HEADER */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Sparkles className="h-8 w-8" style={{ color: "var(--baby-pink)" }} />
            <Typography variant="h4" sx={{ color: "var(--color-foreground)" }}>
              AI-Powered Features
            </Typography>
          </Box>
          <Typography sx={{ color: "var(--color-muted-foreground)" }}>
            Advanced AI insights for wellness
          </Typography>
        </motion.div>

        {/* TABS */}
        <Tabs
          value={activeTab}
          onChange={(e, v) => setActiveTab(v)}
          sx={{
            mb: 4,
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--color-primary)",
            },
          }}
        >
          <Tab
            value="wellness"
            label="Wellness Score"
            sx={{
              color: "var(--color-muted-foreground)",
              "&.Mui-selected": { color: "var(--color-foreground)" },
            }}
          />
          <Tab
            value="cry"
            label="Cry Analyzer"
            sx={{
              color: "var(--color-muted-foreground)",
              "&.Mui-selected": { color: "var(--color-foreground)" },
            }}
          />
          <Tab
            value="coach"
            label="AI Coach"
            sx={{
              color: "var(--color-muted-foreground)",
              "&.Mui-selected": { color: "var(--color-foreground)" },
            }}
          />
          <Tab
            value="milestones"
            label="Milestones"
            sx={{
              color: "var(--color-muted-foreground)",
              "&.Mui-selected": { color: "var(--color-foreground)" },
            }}
          />
        </Tabs>

        {/* WELLNESS SECTION */}
        {activeTab === "wellness" && (
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}
            <Box className="lg:col-span-2 space-y-6">
              <Card
                sx={{
                  borderRadius: 2,
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-card-foreground)",
                }}
              >
                <CardHeader
                  title={
                    <Typography sx={{ color: "var(--color-card-foreground)" }} variant="h6">
                      Your Wellness Score
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <Box className="flex justify-center mb-6">
                    <Box className="relative">
                      <Box
                        className="w-48 h-48 rounded-full border-8 flex items-center justify-center"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        <Box textAlign="center">
                          <Typography variant="h2" sx={{ color: "var(--color-primary)" }}>
                            {wellnessScoreData.overall}
                          </Typography>
                          <Typography sx={{ color: "var(--color-muted-foreground)" }}>
                            Excellent
                          </Typography>
                        </Box>
                      </Box>
                      <Activity className="absolute top-0 right-0 h-10 w-10" style={{ color: "var(--chart-1)" }} />
                    </Box>
                  </Box>

                  {[
                    ["Sleep Quality", wellnessScoreData.sleep],
                    ["Vital Signs", wellnessScoreData.vitals],
                    ["Mood", wellnessScoreData.mood],
                    ["Activity", wellnessScoreData.activity],
                    ["Nutrition", wellnessScoreData.nutrition],
                  ].map(([label, value], i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography sx={{ color: "var(--color-card-foreground)" }} variant="body2">
                          {label}
                        </Typography>
                        <Typography sx={{ color: "var(--color-card-foreground)" }} variant="body2">
                          {value}%
                        </Typography>
                      </Box>

                      <LinearProgress
                        variant="determinate"
                        value={value as number}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "var(--color-muted)",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 4,
                            background: "linear-gradient(to right, var(--baby-blue), var(--baby-pink))",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* WEEKLY TREND */}
              <Card
                sx={{
                  borderRadius: 2,
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-card-foreground)",
                }}
              >
                <CardHeader
                  title={
                    <Typography sx={{ color: "var(--color-card-foreground)" }} variant="h6">
                      Weekly Wellness Trend
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />

                <CardContent>
                  <LineChart
                    height={300}
                    xAxis={[
                      {
                        scaleType: "point",
                        data: weeklyTrend.map((w) => w.day),
                      },
                    ]}
                    series={[
                      {
                        type: "line",
                        data: weeklyTrend.map((w) => w.score),
                        label: "Wellness Score",
                        color: "var(--baby-blue)",
                        curve: "linear",
                        showMark: true,
                      },
                    ]}
                    grid={{ horizontal: true }}
                    sx={{
                      "& .MuiLineElement-root": {
                        strokeWidth: 3,
                      },
                      "& .MuiMarkElement-root": {
                        r: 5,
                        stroke: "var(--baby-blue)",
                        fill: "var(--color-card-foreground)",
                        strokeWidth: 2,
                      },
                      "& .MuiChartsLegend-root": {
                        color: "var(--color-muted-foreground)",
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Box>

            {/* RIGHT — HEALTH RADAR */}
            <Box className="space-y-6">
              <Card
                sx={{
                  borderRadius: 2,
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-card-foreground)",
                }}
              >
                <CardHeader
                  title={
                    <Typography sx={{ color: "var(--color-card-foreground)" }} variant="h6">
                      Health Radar
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <RadarChart
                    height={320}
                    series={[
                      {
                        label: "Health Score",
                        data: radarScores,
                        color: "var(--baby-pink)",
                      },
                    ]}
                    radar={{
                      max: 100,
                      metrics: radarMetrics,
                    }}
                    sx={{
                      "& .MuiChartsRadar-area": {
                        fill: "var(--baby-pink)",
                        fillOpacity: 0.5,
                        stroke: "var(--baby-pink)",
                      },
                      "& .MuiChartsRadar-axis": {
                        stroke: "var(--color-border)",
                      },
                      "& .MuiChartsRadar-label": {
                        fill: "var(--color-muted-foreground)",
                      },
                    }}
                  />
                </CardContent>
              </Card>

              <Card
                sx={{
                  borderRadius: 2,
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-card-foreground)",
                }}
              >
                <CardHeader
                  title={
                    <Typography sx={{ color: "var(--color-card-foreground)" }} variant="h6">
                      AI Recommendations
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  {aiRecommendations.map((rec, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: 2,
                        bgcolor:
                          rec.priority === "medium"
                            ? "rgba(255,166,186,0.06)"
                            : "rgba(136,230,219,0.06)",
                      }}
                    >
                      <Typography fontWeight="bold" sx={{ color: "var(--color-card-foreground)" }}>
                        {rec.icon} {rec.category}
                      </Typography>
                      <Typography sx={{ color: "var(--color-muted-foreground)" }}>{rec.recommendation}</Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Box>
        )}

        {/* CRY ANALYZER */}
        {activeTab === "cry" && (
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card
              sx={{
                borderRadius: 2,
                backgroundColor: "var(--color-card)",
                color: "var(--color-card-foreground)",
              }}
            >
              <CardHeader
                title={<Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>Baby Cry Analyzer</Typography>}
                sx={{ pb: 0 }}
              />
              <CardContent>
                <Box
                  sx={{
                    p: 4,
                    border: `2px dashed var(--color-border)`,
                    textAlign: "center",
                    borderRadius: 2,
                    bgcolor: "transparent",
                  }}
                >
                  <Baby className="h-16 w-16 mx-auto mb-3" style={{ color: "var(--color-muted-foreground)" }} />
                  <Typography sx={{ color: "var(--color-muted-foreground)" }}>Upload or record audio</Typography>

                  <Box display="flex" gap={2} justifyContent="center" mt={2}>
                    <Button variant="outlined" sx={{ color: "var(--color-card-foreground)", borderColor: "var(--color-border)" }}>Upload</Button>
                    <Button variant="contained" sx={{ background: "linear-gradient(to right,var(--baby-blue),var(--baby-pink))", color: "var(--primary-foreground)" }}>Record</Button>
                  </Box>
                </Box>

                <Button
                  fullWidth
                  sx={{
                    mt: 3,
                    background: "linear-gradient(to right,var(--baby-blue),var(--baby-pink))",
                    color: "var(--primary-foreground)"
                  }}
                  variant="contained"
                  onClick={analyzeBabyCry}
                >
                  Analyze Cry Pattern
                </Button>
              </CardContent>
            </Card>

            {cryAnalysis && (
              <Card
                sx={{
                  borderRadius: 2,
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-card-foreground)",
                }}
              >
                <CardHeader title={<Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>Analysis Results</Typography>} sx={{ pb: 0 }} />
                <CardContent>
                  <Box>
                    <Box display="flex" justifyContent="space-between">
                      <Typography sx={{ color: "var(--color-card-foreground)" }}>Detected: {cryAnalysis.type}</Typography>
                      <Chip
                        label={`${cryAnalysis.confidence}% Confidence`}
                        color="success"
                      />
                    </Box>

                    <LinearProgress
                      sx={{
                        mt: 1,
                        height: 8,
                        borderRadius: 2,
                        backgroundColor: "var(--color-muted)",
                        "& .MuiLinearProgress-bar": {
                          background: "linear-gradient(to right,var(--baby-blue),var(--baby-pink))",
                        },
                      }}
                      value={cryAnalysis.confidence}
                      variant="determinate"
                    />

                    <Typography sx={{ mt: 2, color: "var(--color-card-foreground)", fontWeight: "bold" }}>
                      Recommendations
                    </Typography>
                    {cryAnalysis.recommendations.map((r: string, i: number) => (
                      <Typography key={i} sx={{ color: "var(--color-muted-foreground)" }}>✔ {r}</Typography>
                    ))}

                    <Typography sx={{ mt: 2, color: "var(--color-card-foreground)", fontWeight: "bold" }}>
                      Alternative Causes
                    </Typography>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      {cryAnalysis.alternativeCauses.map((c: string, i: number) => (
                        <Chip key={i} label={c} variant="outlined" sx={{ borderColor: "var(--color-border)", color: "var(--color-card-foreground)" }} />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            )}
          </Box>
        )}

        {/* AI COACH */}
        {activeTab === "coach" && (
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Box className="lg:col-span-2">
              <Card sx={{ mb: 2, backgroundColor: "var(--color-card)", color: "var(--color-card-foreground)" }}>
                <CardHeader title={<Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>AI Parenting Coach</Typography>} sx={{ pb: 0 }} />
                <CardContent>
                  <Box
                    sx={{
                      bgcolor: "transparent",
                      p: 2,
                      borderRadius: 2,
                      height: 200,
                      overflowY: "auto",
                    }}
                  >
                    <Typography sx={{ color: "var(--color-muted-foreground)" }}>👋 Hello!...</Typography>
                    <Typography sx={{ color: "var(--color-muted-foreground)" }}>🤰 What exercises are good?</Typography>
                  </Box>

                  <Box display="flex" gap={2} mt={2}>
                    <TextareaAutosize
                      minRows={2}
                      placeholder="Ask your question..."
                      style={{
                        width: "100%",
                        padding: 10,
                        borderRadius: 8,
                        border: `1px solid var(--color-border)`,
                        background: "transparent",
                        color: "var(--color-card-foreground)",
                      }}
                    />
                    <Button variant="contained" sx={{ background: "linear-gradient(to right,var(--baby-blue),var(--baby-pink))", color: "var(--primary-foreground)" }}>
                      <MessageSquare />
                    </Button>
                  </Box>
                </CardContent>
              </Card>

              {/* ROUTINES */}
              <Card sx={{ backgroundColor: "var(--color-card)", color: "var(--color-card-foreground)" }}>
                <CardHeader title={<Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>Daily Routine</Typography>} sx={{ pb: 0 }} />
                <CardContent>
                  {dailyRoutines.map((r, i) => (
                    <Paper
                      key={i}
                      sx={{
                        p: 2,
                        mb: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "transparent",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-card-foreground)",
                      }}
                    >
                      <Typography sx={{ color: "var(--color-card-foreground)" }}>{r.time} — {r.task}</Typography>
                      <Chip
                        size="small"
                        label={r.status}
                        color={r.status === "completed" ? "success" : "default"}
                      />
                    </Paper>
                  ))}
                </CardContent>
              </Card>
            </Box>

            {/* TIPS */}
            <Card sx={{ backgroundColor: "var(--color-card)", color: "var(--color-card-foreground)" }}>
              <CardHeader title={<Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>Quick Tips</Typography>} sx={{ pb: 0 }} />
              <CardContent>
                <Paper sx={{ p: 2, mb: 2, bgcolor: "rgba(137,207,240,0.04)" }}>
                  <Typography fontWeight="bold" sx={{ color: "var(--color-card-foreground)" }}>Hydration</Typography>
                  <Typography sx={{ color: "var(--color-muted-foreground)" }}>Drink 8–10 glasses daily</Typography>
                </Paper>
                <Paper sx={{ p: 2, mb: 2, bgcolor: "rgba(34,197,94,0.04)" }}>
                  <Typography fontWeight="bold" sx={{ color: "var(--color-card-foreground)" }}>Rest</Typography>
                  <Typography sx={{ color: "var(--color-muted-foreground)" }}>Take small breaks</Typography>
                </Paper>
                <Paper sx={{ p: 2, bgcolor: "rgba(99,102,241,0.04)" }}>
                  <Typography fontWeight="bold" sx={{ color: "var(--color-card-foreground)" }}>Prenatal Vitamins</Typography>
                  <Typography sx={{ color: "var(--color-muted-foreground)" }}>Take with meals</Typography>
                </Paper>
              </CardContent>
            </Card>
          </Box>
        )}

        {/* MILESTONES */}
        {activeTab === "milestones" && (
          <Card sx={{ backgroundColor: "var(--color-card)", color: "var(--color-card-foreground)" }}>
            <CardHeader title={<Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>Baby Milestones</Typography>} sx={{ pb: 0 }} />
            <CardContent>
              {babyMilestones.map((m, i) => (
                <Box key={i} sx={{ mb: 2, pl: 2, borderLeft: `4px solid var(--baby-blue)` }}>
                  <Typography variant="h6" sx={{ color: "var(--color-card-foreground)" }}>
                    Week {m.week}: {m.milestone}
                  </Typography>
                  <Typography sx={{ color: "var(--color-muted-foreground)" }}>{m.development}</Typography>
                  {m.predicted && (
                    <Chip label="AI Predicted" color="info" sx={{ mt: 1 }} size="small" />
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
      </Box>
    </div>
  );
}
