import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <li>Home</li>
        <li>Popular movies</li>
        <li style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="search-input">Search for movies</label>
          <input id="search-input" name="search-input" />
        </li>
      </ul>
    </nav>
  );
}
