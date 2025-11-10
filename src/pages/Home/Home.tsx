import "./Home.css";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Parents & Children For a Healthier Future</h1>
          <p>
            YouEvolve Nurture helps families with expert guidance, emotional
            wellness, developmental programs, and child growth insights — all in
            one platform.
          </p>

          <div className="hero-buttons">
            <Button color="primary" variant="contained">Explore Programs</Button>
            <Button color ="secondary" variant="outlined">Book a Consultation</Button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Family"
          />
        </div>
      </section>

      {/* MINI CTA */}
      <section className="cta-section">
        <h2>Start Your Parenting Journey Today</h2>
        <Button variant="contained" color="primary">Get Started</Button>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>Why Choose Nurture?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Certified Experts</h3>
            <p>Access top psychologists, doctors, and parental coaches.</p>
          </div>

          <div className="feature-card">
            <h3>Growth Tracking</h3>
            <p>
              Monitor your child’s emotional, behavioral & physical development.
            </p>
          </div>

          <div className="feature-card">
            <h3>Science-backed Programs</h3>
            <p>
              Structured routines for parenting, wellness, and child habits.
            </p>
          </div>

          <div className="feature-card">
            <h3>Secure Consultations</h3>
            <p>Private in-browser video sessions, chats, and reports.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
