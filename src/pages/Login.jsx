import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      navigate("/features");
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-wrapper fade-up fade-up-1">
        <div className="login-card">
          {/* Back */}
          <Link to="/" className="back-link">
            <div className="back-container">
              <ArrowBackIcon className="back-icon" />
              Back to home
            </div>
          </Link>

          {/* Logo */}
          <div className="login-logo">Adaptify</div>

          {/* Heading */}
          <Typography variant="h3" className="login-title">
            Welcome back
          </Typography>

          <Typography variant="body2" className="login-subtitle">
            Sign in to access your Adaptify features.
          </Typography>

          {/* Error */}
          {error && (
            <Alert severity="error" className="login-alert">
              {error}
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="login-form">
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#0f8a71",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#0f8a71",
                },
                "& input::placeholder": {
                  color: "gray",
                  opacity: 1,
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#0f8a71",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#0f8a71",
                },
                "& input::placeholder": {
                  color: "gray",
                  opacity: 1,
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              className="login-button"
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {/* Signup */}
          <Typography variant="body2" className="login-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
