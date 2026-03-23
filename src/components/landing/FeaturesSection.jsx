import "./FeaturesSection.css";
import MicIcon from "@mui/icons-material/Mic";
import PanToolIcon from "@mui/icons-material/PanTool";
import VisibilityIcon from "@mui/icons-material/Visibility";

const features = [
  {
    icon: MicIcon,
    title: "Speech to Text",
    description:
      "Convert your voice into text effortlessly. Speak naturally and let Adaptify transcribe for you in real time.",
    color: "#dbeafe",
    iconColor: "#2563eb",
  },
  {
    icon: PanToolIcon,
    title: "Gesture Recognition",
    description:
      "Communicate using American Sign Language. Our AI recognizes your gestures and translates them into text.",
    color: "#fef3c7",
    iconColor: "#d97706",
  },
  {
    icon: VisibilityIcon,
    title: "Eye-Controlled Cursor",
    description:
      "Navigate your computer using just your eyes. Precise, responsive, and completely hands-free control.",
    color: "#dcfce7",
    iconColor: "#16a34a",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container features-container">
        {/* Header */}
        <div className="text-center mb-5">
          {/* <span className="badge-pill mb-3 d-inline-block">
            &#10022; What We Offer
          </span> */}

          <h2 className="features-title">Three Powerful Features</h2>

          <p className="features-subtitle">
            Each feature is designed to remove a specific barrier, giving you
            freedom to interact with technology on your own terms.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="col-md-4" key={feature.title}>
                <div className="feature-card-main reveal-card h-100">
                  <div className="feature-card-content">
                    <div
                      className="feature-icon-box"
                      style={{ background: feature.color }}
                    >
                      <Icon
                        style={{
                          color: feature.iconColor,
                          fontSize: "28px",
                        }}
                      />
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
