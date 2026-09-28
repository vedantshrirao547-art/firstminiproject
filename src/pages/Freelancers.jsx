import { useEffect, useState } from "react";
import FreelancerCard from "../components/FreelancerCard";

function Freelancers() {
  const [freelancers, setFreelancers] = useState([]);
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("All");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const freelancerData = data.map((user, index) => ({
          ...user,

          skill: [
            "Web Development",
            "Graphic Design",
            "UI/UX Design",
            "Python Development",
            "Mobile Development"
          ][index % 5],

          experience: `${index + 1} Years`
        }));

        setFreelancers(freelancerData);
      })

      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const nameMatch = freelancer.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const skillMatch = skill === "All" || freelancer.skill === skill;

    return nameMatch && skillMatch;
  });

  return (
    <div className="container freelancers-page">
      <div className="freelancers-header">
        <div>
          <span className="eyebrow">OUR TALENT</span>
          <h1>Freelancers</h1>
          <p className="freelancers-subtitle">
            Meet skilled professionals ready to help turn your next idea into something
            real.
          </p>
        </div>

        <div className="total-badge">{filteredFreelancers.length} profiles</div>
      </div>

      <div className="filters-panel">
        <div className="filters-label">
          <strong>Find your match</strong>
          <span>Search by name or filter by expertise.</span>
        </div>

        <div className="search-box">
          <span>🔎</span>
          <input
            type="text"
            placeholder="Search freelancer by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="select-box">
          <label htmlFor="skill-filter">Skill</label>
          <select id="skill-filter" value={skill} onChange={(e) => setSkill(e.target.value)}>
            <option value="All">All Skills</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Python Development">Python Development</option>
            <option value="Mobile Development">Mobile Development</option>
          </select>
        </div>
      </div>

      <div className="results-heading">
        <span>Showing <strong>{filteredFreelancers.length}</strong> available profiles</span>
        <span className="results-line"></span>
      </div>

      <div className="results-grid">
        {filteredFreelancers.map((freelancer) => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </div>
  );
}

export default Freelancers;
