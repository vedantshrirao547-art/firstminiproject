import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FreelancerDetails() {
  const { id } = useParams();

  const [freelancer, setFreelancer] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const skills = [
          "Web Development",
          "Graphic Design",
          "UI/UX Design",
          "Python Development",
          "Mobile Development"
        ];

        const updatedData = {
          ...data,
          skill: skills[(data.id - 1) % 5],
          experience: `${data.id} Years`
        };

        setFreelancer(updatedData);
      });
  }, [id]);

  if (!freelancer) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="profile">
        <h1>{freelancer.name}</h1>

        <p>
          <b>Username:</b> {freelancer.username}
        </p>

        <p>
          <b>Email:</b> {freelancer.email}
        </p>

        <p>
          <b>Phone:</b> {freelancer.phone}
        </p>

        <p>
          <b>Website:</b> {freelancer.website}
        </p>

        <p>
          <b>Skill:</b> {freelancer.skill}
        </p>

        <p>
          <b>Experience:</b> {freelancer.experience}
        </p>

        <button onClick={() => alert("Hire request sent successfully!")}>Hire Freelancer</button>
      </div>
    </div>
  );
}

export default FreelancerDetails;
