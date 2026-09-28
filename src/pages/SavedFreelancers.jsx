import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FreelancerCard from "../components/FreelancerCard";
import {
  getSavedFreelancerIds,
  subscribeToSavedFreelancers
} from "../utils/savedFreelancers";

const skills = [
  "Web Development",
  "Graphic Design",
  "UI/UX Design",
  "Python Development",
  "Mobile Development"
];

function SavedFreelancers() {
  const [savedIds, setSavedIds] = useState(getSavedFreelancerIds);
  const [freelancers, setFreelancers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    return subscribeToSavedFreelancers(() => {
      setSavedIds(getSavedFreelancerIds());
    });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load freelancers");
        return response.json();
      })
      .then((data) => {
        const freelancerData = data.map((user, index) => ({
          ...user,
          skill: skills[index % skills.length],
          experience: `${index + 1} Years`
        }));

        setFreelancers(freelancerData);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const savedFreelancers = freelancers.filter((freelancer) =>
    savedIds.includes(String(freelancer.id))
  );

  return (
    <main className="container saved-page">
      <div className="freelancers-header">
        <div>
          <span className="eyebrow">YOUR SHORTLIST</span>
          <h1>Saved Freelancers ❤️</h1>
          <p className="freelancers-subtitle">Freelancers you saved for later.</p>
        </div>
        {!isLoading && !hasError && savedFreelancers.length > 0 && (
          <div className="total-badge">{savedFreelancers.length} saved</div>
        )}
      </div>

      {isLoading && <p className="saved-message" role="status">Loading saved freelancers...</p>}

      {!isLoading && hasError && (
        <p className="saved-message" role="alert">
          Freelancers could not be loaded. Please try again later.
        </p>
      )}

      {!isLoading && !hasError && savedFreelancers.length > 0 && (
        <div className="results-grid">
          {savedFreelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
          ))}
        </div>
      )}

      {!isLoading && !hasError && savedFreelancers.length === 0 && (
        <section className="saved-empty-state">
          <div className="saved-empty-heart" aria-hidden="true">♡</div>
          <h2>No Saved Freelancers</h2>
          <p>Save freelancers that you are interested in and they will appear here.</p>
          <Link to="/freelancers" className="browse-freelancers-button">
            Browse Freelancers →
          </Link>
        </section>
      )}
    </main>
  );
}

export default SavedFreelancers;