import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="row align-items-center g-5">
          {/* LEFT */}
          <div className="left-div col-lg-6">
            <div>
              <span className="badge-pill fade-up fade-up-1 mb-4 d-inline-block">
                Empowering Accessibility
              </span>

              <h1 className="hero-title fade-up fade-up-2">
                Technology That <span className="gradient-text">Adapts</span> to
                You
              </h1>

              <p className="hero-subtitle fade-up fade-up-3">
                Adaptify breaks barriers with AI powered tools for speech
                recognition, sign language detection and eye controlled
                navigation.
              </p>

              <div className="hero-buttons fade-up fade-up-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg d-flex align-items-center gap-2"
                  onClick={() => navigate("/signup")}
                >
                  <span className="d-flex align-items-center gap-2">
                    Get Started Free <ArrowForwardIcon />
                  </span>
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-div col-lg-6 d-none d-lg-block">
            <div className="hero-card fade-up fade-up-5">
              {/* Decorative circles */}
              <div className="hero-circle hero-circle-top"></div>
              <div className="hero-circle hero-circle-bottom"></div>

              {[
                {
                  emoji: "🎙️",
                  label: "Speech to Text",
                  color: "#dbeafe",
                  accent: "#2563eb",
                },
                {
                  emoji: "✋",
                  label: "Gesture Recognition",
                  color: "#fef3c7",
                  accent: "#d97706",
                },
                {
                  emoji: "👁️",
                  label: "Eye-Controlled Cursor",
                  color: "#dcfce7",
                  accent: "#16a34a",
                },
              ].map((item) => (
                <div key={item.label} className="feature-card">
                  <div
                    className="feature-icon"
                    style={{ background: item.color }}
                  >
                    {item.emoji}
                  </div>

                  <span className="feature-text">{item.label}</span>

                  <div
                    className="feature-dot"
                    style={{ background: item.accent }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
