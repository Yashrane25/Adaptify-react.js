import { useNavigate } from "react-router-dom";
import "./FeatureDashboardCard.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* Props:
   - icon: component
   - title, description
   - color, iconColor
   - path */
export default function FeatureDashboardCard({
  icon: Icon,
  title,
  description,
  color,
  iconColor,
  path,
}) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-card" onClick={() => navigate(path)}>
      <div className="dashboard-card-content">
        {/* Icon */}
        <div className="dashboard-icon-box" style={{ background: color }}>
          {Icon && (
            <Icon className="dashboard-icon" style={{ color: iconColor }} />
          )}
        </div>

        {/* Title */}
        <h4 className="dashboard-title">{title}</h4>

        {/* Description */}
        <p className="dashboard-desc">{description}</p>

        {/* Button */}
        <div className="dashboard-button-wrapper">
          <button
            type="button"
            className="dashboard-button"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 prevent double navigation
              navigate(path);
            }}
          >
            <span className="d-flex align-items-center gap-2">
              Open Feature <ArrowForwardIcon className="arrow-icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
