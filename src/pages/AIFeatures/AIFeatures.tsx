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

import { LineChart } from '@mui/x-charts/LineChart';
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
          <Sparkles className="h-8 w-8 text-[#FFB6C1]" />
          <Typography variant="h4">AI-Powered Features</Typography>
        </Box>
        <Typography color="gray">Advanced AI insights for wellness</Typography>
      </motion.div>

      {/* TABS */}
      <Tabs
        value={activeTab}
        onChange={(e, v) => setActiveTab(v)}
        sx={{ mb: 4 }}
      >
        <Tab value="wellness" label="Wellness Score" />
        <Tab value="cry" label="Cry Analyzer" />
        <Tab value="coach" label="AI Coach" />
        <Tab value="milestones" label="Milestones" />
      </Tabs>

      {/* WELLNESS SECTION */}
      {activeTab === "wellness" && (
        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <Box className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <Typography variant="h6">Your Wellness Score</Typography>
              </CardHeader>
              <CardContent>
                <Box className="flex justify-center mb-6">
                  <Box className="relative">
                    <Box className="w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center">
                      <Box textAlign="center">
                        <Typography variant="h2" color="primary">
                          {wellnessScoreData.overall}
                        </Typography>
                        <Typography color="gray">Excellent</Typography>
                      </Box>
                    </Box>
                    <Activity className="absolute top-0 right-0 h-10 w-10 text-green-500" />
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
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body2">{value}%</Typography>
    </Box>

    <LinearProgress
      variant="determinate"
      value={value as number}
      sx={{
        height: 8,
        borderRadius: 4,
        backgroundColor: "#e0e0e0",

        "& .MuiLinearProgress-bar": {
          borderRadius: 4,
          background: "linear-gradient(to right, #89CFF0, #FFB6C1)",
        },
      }}
    />
  </Box>
))}

              </CardContent>
            </Card>

            {/* WEEKLY TREND (NO CHART → MUI BARS) */}
            <Card>
  <CardHeader>
    <Typography variant="h6">Weekly Wellness Trend</Typography>
  </CardHeader>

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
      color: "#89CFF0",
      curve: "linear",
      showMark: true, // dots show
    },
  ]}
  grid={{ horizontal: true }}
  sx={{
    "& .MuiLineElement-root": {
      strokeWidth: 3,
    },
    "& .MuiMarkElement-root": {
      r: 5,
      stroke: "#89CFF0",
      fill: "white",
      strokeWidth: 2,
    },
  }}
/>

  </CardContent>
</Card>

          </Box>

          {/* RIGHT — HEALTH RADAR (MUI version) */}
          <Box className="space-y-6">

            <Card>
  <CardHeader>
    <Typography variant="h6">Health Radar</Typography>
  </CardHeader>

  <CardContent>
    <RadarChart
      height={320}
      series={[
        {
          label: "Health Score",
          data: radarScores,
          color: "#FF69B4", 
        },
      ]}
      radar={{
        max: 100,         // maximum score
        metrics: radarMetrics,
      }}
      sx={{
        "& .MuiChartsRadar-area": {
          fill: "#FFB6C1",
          fillOpacity: 0.5,
          stroke: "#FFB6C1",
        },
      }}
    />
  </CardContent>
</Card>

  

            <Card>
              <CardHeader>
                <Typography variant="h6">AI Recommendations</Typography>
              </CardHeader>
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
                          ? "warning.light"
                          : "success.light",
                    }}
                  >
                    <Typography fontWeight="bold">
                      {rec.icon} {rec.category}
                    </Typography>
                    <Typography>{rec.recommendation}</Typography>
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
          <Card>
            <CardHeader>
              <Typography variant="h6">Baby Cry Analyzer</Typography>
            </CardHeader>
            <CardContent>
              <Box
                sx={{
                  p: 4,
                  border: "2px dashed gray",
                  textAlign: "center",
                  borderRadius: 2,
                }}
              >
                <Baby className="h-16 w-16 text-gray-400 mx-auto mb-3" />
                <Typography color="gray">Upload or record audio</Typography>

                <Box display="flex" gap={2} justifyContent="center" mt={2}>
                  <Button variant="outlined">Upload</Button>
                  <Button variant="contained">Record</Button>
                </Box>
              </Box>

              <Button
                fullWidth
                sx={{
                  mt: 3,
                  background: "linear-gradient(to right,#89CFF0,#FFB6C1)",
                }}
                variant="contained"
                onClick={analyzeBabyCry}
              >
                Analyze Cry Pattern
              </Button>
            </CardContent>
          </Card>

          {cryAnalysis && (
            <Card>
              <CardHeader>
                <Typography variant="h6">Analysis Results</Typography>
              </CardHeader>
              <CardContent>
                <Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Detected: {cryAnalysis.type}</Typography>
                    <Chip
                      label={`${cryAnalysis.confidence}% Confidence`}
                      color="success"
                    />
                  </Box>

                  <LinearProgress
                    sx={{ mt: 1 }}
                    value={cryAnalysis.confidence}
                  />

                  <Typography sx={{ mt: 2 }} fontWeight="bold">
                    Recommendations
                  </Typography>
                  {cryAnalysis.recommendations.map((r : string, i : number) => (
                    <Typography key={i}>✔ {r}</Typography>
                  ))}

                  <Typography sx={{ mt: 2 }} fontWeight="bold">
                    Alternative Causes
                  </Typography>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {cryAnalysis.alternativeCauses.map((c: string, i: number) => (
                      <Chip key={i} label={c} variant="outlined" />
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
            <Card sx={{ mb: 2 }}>
              <CardHeader>
                <Typography variant="h6">AI Parenting Coach</Typography>
              </CardHeader>
              <CardContent>
                <Box
                  sx={{
                    bgcolor: "grey.100",
                    p: 2,
                    borderRadius: 2,
                    height: 200,
                    overflowY: "auto",
                  }}
                >
                  <Typography>👋 Hello!...</Typography>
                  <Typography>🤰 What exercises are good?</Typography>
                </Box>

                <Box display="flex" gap={2} mt={2}>
                  <TextareaAutosize
                    minRows={2}
                    placeholder="Ask your question..."
                    style={{
                      width: "100%",
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid #ccc",
                    }}
                  />
                  <Button variant="contained">
                    <MessageSquare />
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* ROUTINES */}
            <Card>
              <CardHeader>
                <Typography variant="h6">Daily Routine</Typography>
              </CardHeader>
              <CardContent>
                {dailyRoutines.map((r, i) => (
                  <Paper
                    key={i}
                    sx={{
                      p: 2,
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>{r.time} — {r.task}</Typography>
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
          <Card>
            <CardHeader>
              <Typography variant="h6">Quick Tips</Typography>
            </CardHeader>
            <CardContent>
              <Paper sx={{ p: 2, mb: 2, bgcolor: "blue.50" }}>
                <Typography fontWeight="bold">Hydration</Typography>
                <Typography>Drink 8–10 glasses daily</Typography>
              </Paper>
              <Paper sx={{ p: 2, mb: 2, bgcolor: "green.50" }}>
                <Typography fontWeight="bold">Rest</Typography>
                <Typography>Take small breaks</Typography>
              </Paper>
              <Paper sx={{ p: 2, bgcolor: "purple.50" }}>
                <Typography fontWeight="bold">Prenatal Vitamins</Typography>
                <Typography>Take with meals</Typography>
              </Paper>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* MILESTONES */}
      {activeTab === "milestones" && (
        <Card>
          <CardHeader>
            <Typography variant="h6">Baby Milestones</Typography>
          </CardHeader>
          <CardContent>
            {babyMilestones.map((m, i) => (
              <Box key={i} sx={{ mb: 2, pl: 2, borderLeft: "4px solid #89CFF0" }}>
                <Typography variant="h6">
                  Week {m.week}: {m.milestone}
                </Typography>
                <Typography color="gray">{m.development}</Typography>
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
