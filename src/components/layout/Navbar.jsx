import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Button, Offcanvas, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function CustomNavbar({ user, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    ...(user ? [{ label: "Features", to: "/features" }] : []),
  ];

  const handleLogout = () => {
    onLogout();
    setShowOffcanvas(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="md"
        fixed="top"
        className={`py-3 shadow-sm navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container className="navbar-container">
          <Navbar.Brand as={Link} to="/" className="logo-text">
            Adaptify
          </Navbar.Brand>

          {/* Mobile toggle */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowOffcanvas(true)}
          />

          {/* Desktop Links */}
          <Navbar.Collapse className="justify-content-end d-none d-md-flex">
            <Nav className="align-items-center">
              {navLinks.map((link) => (
                <Nav.Link
                  as={Link}
                  key={link.to}
                  to={link.to}
                  className={`nav-btn ${location.pathname === link.to ? "active" : ""}`}
                >
                  {link.label}
                </Nav.Link>
              ))}

              {user ? (
                <Button
                  variant="outline-secondary"
                  className="ms-2 logout-btn"
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline-secondary"
                    className="ms-2 login-btn"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="success"
                    className="ms-2 signup-btn"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="drawer-logo">Adaptify</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navLinks.map((link) => (
              <Nav.Link
                as={Link}
                key={link.to}
                to={link.to}
                onClick={() => setShowOffcanvas(false)}
              >
                {link.label}
              </Nav.Link>
            ))}

            <div className="drawer-auth mt-3">
              {user ? (
                <Button
                  variant="outline-secondary"
                  className="w-100 mb-2"
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline-secondary"
                    className="w-100 mb-2"
                    onClick={() => {
                      navigate("/login");
                      setShowOffcanvas(false);
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="success"
                    className="w-100"
                    onClick={() => {
                      navigate("/signup");
                      setShowOffcanvas(false);
                    }}
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
