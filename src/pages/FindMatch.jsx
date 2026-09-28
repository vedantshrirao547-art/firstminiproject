import { useEffect, useState } from "react";
import FreelancerCard from "../components/FreelancerCard";

const skills = [
  "Web Development",
  "Graphic Design",
  "UI/UX Design",
  "Python Development",
  "Mobile Development"
];

function FindMatch() {
  const [freelancers, setFreelancers] = useState([]);
  const [skill, setSkill] = useState("All");
  const [experience, setExperience] = useState("Any");
  const [matches, setMatches] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const freelancerData = data.map((user, index) => ({
          ...user,
          skill: skills[index % skills.length],
          experience: `${index + 1} Years`,
          experienceYears: index + 1
        }));

        setFreelancers(freelancerData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  function matchesExperience(years) {
    if (experience === "Any") return true;
    if (experience === "1-3") return years >= 1 && years <= 3;
    if (experience === "4-6") return years >= 4 && years <= 6;
    return years >= 7;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const filteredMatches = freelancers.filter((freelancer) => {
      const skillMatches = skill === "All" || freelancer.skill === skill;
      return skillMatches && matchesExperience(freelancer.experienceYears);
    });

    setMatches(filteredMatches);
    setHasSearched(true);
  }

  function handleTryAgain() {
    setSkill("All");
    setExperience("Any");
    setMatches([]);
    setHasSearched(false);
  }

  return (
    <main className="container find-match-page">
      <section className="match-hero">
        <div>
          <span className="eyebrow">SMARTER SEARCH</span>
          <h1>Find Your Perfect Freelancer 🎯</h1>
          <p>Tell us what you need and we'll help you find suitable freelancers.</p>
        </div>
        <div className="match-hero-mark">✦</div>
      </section>

      <section className="match-panel">
        <div className="match-panel-heading">
          <span className="step-number">01</span>
          <div>
            <h2>Tell us what you need</h2>
            <p>Choose the skills and experience that fit your project.</p>
          </div>
        </div>

        <form className="match-form" onSubmit={handleSubmit}>
          <div className="match-field">
            <label htmlFor="match-skill">Select Skill</label>
            <select id="match-skill" value={skill} onChange={(event) => setSkill(event.target.value)}>
              <option value="All">All Skills</option>
              {skills.map((skillName) => (
                <option key={skillName} value={skillName}>
                  {skillName}
                </option>
              ))}
            </select>
          </div>

          <div className="match-field">
            <label htmlFor="match-experience">Select Experience</label>
            <select
              id="match-experience"
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
            >
              <option value="Any">Any Experience</option>
              <option value="1-3">1–3 Years</option>
              <option value="4-6">4–6 Years</option>
              <option value="7+">7+ Years</option>
            </select>
          </div>

          <button type="submit">Find My Match →</button>
        </form>
      </section>

      {hasSearched && matches.length > 0 && (
        <section className="match-results" aria-live="polite">
          <div className="match-results-heading">
            <div>
              <span className="eyebrow">YOUR RESULTS</span>
              <h2>Freelancers who fit your search</h2>
            </div>
            <span className="match-count">{matches.length} matches</span>
          </div>

          <div className="match-results-grid">
            {matches.map((freelancer) => (
              <FreelancerCard key={freelancer.id} freelancer={freelancer} />
            ))}
          </div>
        </section>
      )}

      {hasSearched && matches.length === 0 && (
        <section className="no-match" aria-live="polite">
          <div className="no-match-icon">⌕</div>
          <h2>No matching freelancer found.</h2>
          <p>Try a different skill or experience range to see more profiles.</p>
          <button type="button" onClick={handleTryAgain}>
            Try Again
          </button>
        </section>
      )}
    </main>
  );
}

export default FindMatch;
