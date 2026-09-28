import { useState } from "react";

function AddFreelancer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skill: "",
    experience: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      form.name === "" ||
      form.email === "" ||
      form.skill === "" ||
      form.experience === ""
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("Freelancer added successfully!");

    setForm({
      name: "",
      email: "",
      skill: "",
      experience: ""
    });
  }

  return (
    <div className="container add-freelancer-page">
      <div className="add-page-intro">
        <span className="eyebrow">JOIN THE NETWORK</span>
        <h1>Showcase your talent.</h1>
        <p>
          Create your freelancer profile and make it easier for great projects to find
          you.
        </p>
      </div>

      <div className="add-freelancer-layout">
        <aside className="add-page-aside">
          <div className="aside-icon">✦</div>
          <h2>Put your skills in the spotlight.</h2>
          <p>
            A clear profile helps clients understand what you do and why you are the right
            person for their project.
          </p>

          <div className="benefit-list">
            <div>
              <span>✓</span>
              <strong>Be discovered</strong>
              <small>Appear in our freelancer directory.</small>
            </div>
            <div>
              <span>✓</span>
              <strong>Share your expertise</strong>
              <small>Highlight your strongest professional skill.</small>
            </div>
            <div>
              <span>✓</span>
              <strong>Keep it simple</strong>
              <small>Set up your profile in under a minute.</small>
            </div>
          </div>
        </aside>

        <div className="add-form-panel">
          <div className="form-heading">
            <h2>Build your profile</h2>
            <p>Tell clients a little about what you do.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="freelancer-name">Name</label>
              <input
                id="freelancer-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="freelancer-email">Email</label>
              <input
                id="freelancer-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="freelancer-skill">Primary skill</label>
              <select id="freelancer-skill" name="skill" value={form.skill} onChange={handleChange}>
                <option value="">Select your strongest skill</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Python Development">Python Development</option>
                <option value="Mobile Development">Mobile Development</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="freelancer-experience">Experience</label>
              <input
                id="freelancer-experience"
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Example: 2 Years"
              />
            </div>

            <button type="submit">Add My Profile →</button>
          </form>

          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default AddFreelancer;
