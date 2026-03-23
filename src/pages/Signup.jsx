import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./Signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper fade-up fade-up-1">
        <div className="signup-card">
          {/* Back */}
          <Link to="/" className="back-link">
            <div className="back-container">
              <ArrowBackIcon className="back-icon" />
              Back to home
            </div>
          </Link>

          {/* Logo */}
          <div className="signup-logo">Adaptify</div>

          {/* Heading */}
          <Typography variant="h3" className="signup-title">
            Create your account
          </Typography>

          <Typography variant="body2" className="signup-subtitle">
            Join Adaptify and unlock accessible technology.
          </Typography>

          {/* Error */}
          {error && (
            <Alert severity="error" className="signup-alert">
              {error}
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="signup-form">
            <TextField
              label="Full Name"
              fullWidth
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              inputProps={{ minLength: 6 }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              className="signup-button"
            >
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          {/* Footer */}
          <Typography variant="body2" className="signup-footer">
            Already have an account?{" "}
            <Link to="/login" className="signin-link">
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
