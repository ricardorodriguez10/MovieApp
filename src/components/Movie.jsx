import "./Movie.css";

export default function Movie({ movie, onClick }) {
  const handleOnClick = () => {
    onClick(movie);
  };

  return (
    <div className="moviediv" onClick={handleOnClick}>
      <img
        className="movieimg"
        alt={`Backdrop ${movie.original_title}`}
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      />
      <div className="moviecontainer">
        <h4>{movie.original_title}</h4>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
