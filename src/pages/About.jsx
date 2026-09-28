function About() {
  return (
    <div className="container about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">ABOUT THE PLATFORM</span>
          <h1>Making great work easier to find.</h1>
          <p>
            Freelancer Finder is a simple, focused space for discovering talented
            professionals and exploring the skills they bring to every project.
          </p>
        </div>

        <div className="about-hero-mark">
          <span>✦</span>
          <strong>Talent</strong>
          <small>meets opportunity</small>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Simple tools. Better connections.</h2>
        </div>

        <div className="about-value-grid">
          <article className="about-value-card">
            <div className="about-card-icon">🔎</div>
            <h3>Discover easily</h3>
            <p>Search by name or skill and quickly narrow down the right professionals.</p>
          </article>

          <article className="about-value-card">
            <div className="about-card-icon">👤</div>
            <h3>See the full picture</h3>
            <p>Explore profiles with practical details about experience and expertise.</p>
          </article>

          <article className="about-value-card">
            <div className="about-card-icon">🤝</div>
            <h3>Start with confidence</h3>
            <p>Use clear information to find a professional who fits your next idea.</p>
          </article>
        </div>
      </section>

    </div>
  );
}

export default About;