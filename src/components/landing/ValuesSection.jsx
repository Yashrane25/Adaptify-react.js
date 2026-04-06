import "./ValuesSection.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";

const values = [
  {
    icon: FavoriteIcon,
    title: "Inclusive Design",
    description:
      "Built for everyone, with accessibility at the core of every feature we create.",
    color: "#fce7f3",
    iconColor: "#db2777",
  },
  {
    icon: SecurityIcon,
    title: "Privacy First",
    description:
      "Your data stays yours. All processing happens securely and privately.",
    color: "#ede9fe",
    iconColor: "#7c3aed",
  },
  {
    icon: BoltIcon,
    title: "Real-time Performance",
    description:
      "Lightning fast processing so you can interact without any delay.",
    color: "#fef3c7",
    iconColor: "#d97706",
  },
];

export default function ValuesSection() {
  return (
    <section className="values-section">
      <div className="container values-container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="values-title">Why Adaptify?</h2>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {values.map((v) => {
            const Icon = v.icon;

            return (
              <div className="col-md-4" key={v.title}>
                <div className="value-card reveal-card">
                  {/* Icon */}
                  <div
                    className="value-icon-box"
                    style={{ background: v.color }}
                  >
                    <Icon
                      style={{
                        color: v.iconColor,
                        fontSize: "26px",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="value-title">{v.title}</h4>

                  {/* Description */}
                  <p className="value-desc">{v.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
