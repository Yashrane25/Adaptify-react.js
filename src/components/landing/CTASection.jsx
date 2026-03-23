import { useNavigate } from "react-router-dom";
import "./CTASection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="container cta-container">
        {/* Gradient Card */}
        <div className="cta-card">
          {/* Decorative circles */}
          <div className="cta-circle cta-circle-top"></div>
          <div className="cta-circle cta-circle-bottom"></div>

          {/* Title */}
          <h2 className="cta-title">
            Ready to Experience Accessible Technology?
          </h2>

          {/* Subtitle */}
          <p className="cta-subtitle">
            Join Adaptify today and discover a new way to interact with your
            computer.
          </p>

          {/* Button */}
          <button
            type="button"
            className="cta-button"
            onClick={() => navigate("/signup")}
          >
            <span className="d-flex align-items-center gap-2">
              Create Free Account <ArrowForwardIcon />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
