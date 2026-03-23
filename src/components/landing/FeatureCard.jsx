import "./FeatureCard.css";

/* Props:
    feature: { icon, title, description, color, iconColor }
    index: (optional, for animations if needed later) */

export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="feature-card-main reveal-card h-100">
      <div className="feature-card-content">
        {/* Icon */}
        <div className="feature-icon-box" style={{ background: feature.color }}>
          <Icon className="feature-icon" style={{ color: feature.iconColor }} />
        </div>

        {/* Title */}
        <h4 className="feature-title">{feature.title}</h4>

        {/* Description */}
        <p className="feature-desc">{feature.description}</p>
      </div>
    </div>
  );
}
