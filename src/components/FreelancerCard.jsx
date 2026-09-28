import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getSavedFreelancerIds,
  subscribeToSavedFreelancers,
  toggleSavedFreelancer
} from "../utils/savedFreelancers";

function FreelancerCard({ freelancer }) {
  const [isSaved, setIsSaved] = useState(() =>
    getSavedFreelancerIds().includes(String(freelancer.id))
  );

  useEffect(() => {
    return subscribeToSavedFreelancers(() => {
      setIsSaved(getSavedFreelancerIds().includes(String(freelancer.id)));
    });
  }, [freelancer.id]);

  function handleSaveToggle() {
    const savedIds = toggleSavedFreelancer(freelancer.id);
    setIsSaved(savedIds.includes(String(freelancer.id)));
  }

  return (
    <article className="freelancer-card">
      <div className="card-accent"></div>
      <div className="freelancer-top">
        <div className="freelancer-avatar">{freelancer.name.charAt(0)}</div>

        <div className="freelancer-status">
          <span className="online-dot"></span>
          Available
        </div>
      </div>

      <div className="freelancer-body">
        <span className="profile-label">FREELANCER PROFILE</span>
        <h3>{freelancer.name}</h3>
        <p className="freelancer-email">{freelancer.email}</p>

        <div className="skill-tag">{freelancer.skill}</div>

        <div className="detail-list">
          <div>
            <span>Experience</span>
            <strong>{freelancer.experience}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{freelancer.address?.city || "Remote"}</strong>
          </div>
        </div>
      </div>

      <div className="freelancer-actions">
        <button
          type="button"
          className={`save-button${isSaved ? " is-saved" : ""}`}
          aria-pressed={isSaved}
          onClick={handleSaveToggle}
        >
          {isSaved ? "♥ Saved" : "♡ Save"}
        </button>
        <Link to={`/freelancer/${freelancer.id}`}>
          <button className="card-button">View Profile</button>
        </Link>
      </div>
    </article>
  );
}

export default FreelancerCard;
