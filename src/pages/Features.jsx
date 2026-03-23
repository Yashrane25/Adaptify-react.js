import Navbar from "../components/layout/Navbar";
import FeatureDashboardCard from "../components/features/FeatureDashboardCard";
import Typography from "@mui/material/Typography";

import MicIcon from "@mui/icons-material/Mic";
import PanToolIcon from "@mui/icons-material/PanTool";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./Features.css";

//array of objects used to store structured data for rendering UI dynamically using map() in React.
const featureCards = [
  {
    icon: MicIcon,
    title: "Speech to Text",
    description:
      "Speak naturally and let our AI convert your voice to text in real time. Perfect for users who find typing difficult.",
    color: "#dbeafe",
    iconColor: "#2563eb",
    path: "/features/speech-to-text",
  },
  {
    icon: PanToolIcon,
    title: "Gesture Recognition",
    description:
      "Use American Sign Language to communicate with your computer. Our vision AI recognizes and translates your gestures.",
    color: "#fef3c7",
    iconColor: "#d97706",
    path: "/features/gesture-recognition",
  },
  {
    icon: VisibilityIcon,
    title: "Eye-Controlled Cursor",
    description:
      "Control your cursor using just your eyes. Navigate, click, and interact completely hands-free.",
    color: "#dcfce7",
    iconColor: "#16a34a",
    path: "/features/eye-control",
  },
];

export default function Features() {
  return (
    <div className="features-page">
      <Navbar />

      <main className="features-main">
        <div className="features-container">
          {/* Header */}
          <div className="features-header text-center">
            <span className="badge-pill fade-up fade-up-1">
              &#10022; Your Toolkit
            </span>

            <Typography
              variant="h1"
              className="fade-up fade-up-2 features-title"
            >
              Your Accessibility Toolkit
            </Typography>

            <Typography
              variant="body1"
              className="fade-up fade-up-3 features-subtitle"
            >
              Choose a feature below to get started. Each tool is designed to
              make your experience seamless and accessible.
            </Typography>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {featureCards.map((feature) => (
              <div className="col-md-4" key={feature.title}>
                <FeatureDashboardCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
