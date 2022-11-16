/**
 * original_title
 * overview
 * release_date
 */

import { useEffect, useState } from "react";
import { getAllPopularMovies } from "../Services/apicalls";
import Movie from "./Movie";

export default function MovieList({ movies, onClick }) {
  // Make api call

  return (
    <div style={{ width: "100%", padding: 16 }}>
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} onClick={onClick} />;
      })}
    </div>
  );
}
