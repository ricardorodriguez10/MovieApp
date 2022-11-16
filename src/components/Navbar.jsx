import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { getAllPopularMovies } from "../Services/apicalls";

export default function Navbar() {
  const [searchKey, setSearchKey] = useState("");

  const searchMovies = (e) => {
    e.preventDefault();
    getAllPopularMovies(searchKey);
  };

  return (
    <nav>
      <ul className="nav">
        <Link to="/" className="site-title">
          The Movie DB
        </Link>
        <li>Home</li>
        <li>Popular movies</li>
        <li className="navbarli">
          <form className="form-container" onSubmit={searchMovies}>
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="searchButton">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}
