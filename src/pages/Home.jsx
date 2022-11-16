import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieView from "../components/MovieView";
import Layout from "../layout/Layout";
import "./Home.css";
import { getAllPopularMovies } from "../Services/apicalls";

// import "../styles.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  const handleOnClick = (movie) => {
    setMovie(movie);
  };

  useEffect(() => {
    getAllPopularMovies()
      .then((result) => {
        const movies = result.data.results;
        setMovies(movies);
      })
      .catch(() => console.error("mal"));
  }, []);

  return (
    <Layout>
      <div
        className="homediv"
        /* Move to custom class */
      >
        {/* MovieList */}
        <MovieList movies={movies} onClick={handleOnClick} />
        {/* MovieView - to do */}
        <MovieView movie={movie} />
      </div>
    </Layout>
  );
}
