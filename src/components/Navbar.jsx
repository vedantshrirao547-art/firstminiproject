import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Freelancer Finder</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/freelancers">Freelancers</Link>
        <Link to="/find-match">Find Your Match</Link>
        <Link to="/saved">Saved ❤️</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
