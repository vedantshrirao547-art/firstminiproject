import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-badge">✦ The place where talent meets opportunity</div>

          <h1>
            Find the perfect <span>freelancer</span> for your next project.
          </h1>

          <p>
            Connect with skilled professionals, discover their expertise, and bring your
            ideas to life.
          </p>

          <div className="hero-actions">
            <Link to="/freelancers">
              <button className="main-btn">Find a Freelancer →</button>
            </Link>

            <Link to="/find-match">
              <button className="outline-btn">Find Your Match</button>
            </Link>
          </div>

          <div className="trusted-text">
            ✓ Easy to search &nbsp;&nbsp; ✓ Simple profiles &nbsp;&nbsp; ✓ Quick connection
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-background-circle"></div>

          <div className="main-profile">
            <div className="profile-avatar">👨‍💻</div>

            <h3>Alex Morgan</h3>
            <p>Full Stack Developer</p>

            <div className="profile-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>API</span>
            </div>

            <div className="profile-bottom">
              <div>
                <strong>4.9 ⭐</strong>
                <small>Rating</small>
              </div>

              <div>
                <strong>3+ Years</strong>
                <small>Experience</small>
              </div>
            </div>
          </div>

          <div className="small-card available-card">
            <span className="online-dot"></span>
            Available for work
          </div>

          <div className="small-card project-card">🚀 <strong>Ready for your project</strong></div>
        </div>
      </section>

      <section className="stats-section">
        <div>
          <strong>10+</strong>
          <span>Freelancers</span>
        </div>

        <div>
          <strong>5+</strong>
          <span>Professional Skills</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Profile Access</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Simple Experience</span>
        </div>
      </section>

      <section className="how-section">
        <div className="section-title">
          <span>HOW IT WORKS</span>
          <h2>Find talent in three simple steps</h2>
          <p>No complicated process. Just search, explore and connect.</p>
        </div>

        <div className="steps-container">
          <div className="work-card">
            <div className="number">01</div>
            <div className="work-icon">🔎</div>
            <h3>Search</h3>
            <p>
              Search freelancers by their name and discover professionals that match your
              needs.
            </p>
          </div>

          <div className="work-card">
            <div className="number">02</div>
            <div className="work-icon">👤</div>
            <h3>Explore Profiles</h3>
            <p>
              View freelancer profiles, skills, experience, contact information and more.
            </p>
          </div>

          <div className="work-card">
            <div className="number">03</div>
            <div className="work-icon">🤝</div>
            <h3>Connect</h3>
            <p>
              Found the right person? Send a hire request and start your project.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section-home">
        <div>
          <span>DISCOVER EXPERTISE</span>
          <h2>Skills for every kind of project.</h2>
          <p>
            From websites to mobile applications, find professionals with the skills you
            need.
          </p>
        </div>

        <div className="skill-pills">
          <div>💻 Web Development</div>
          <div>🎨 Graphic Design</div>
          <div>📱 Mobile Development</div>
          <div>✨ UI/UX Design</div>
          <div>🐍 Python Development</div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span>START TODAY</span>
          <h2>Have a project in mind?</h2>
          <p>Find the right freelancer and turn your idea into reality.</p>
        </div>

        <Link to="/freelancers">
          <button>Explore Freelancers →</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
