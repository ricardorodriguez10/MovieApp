import "./MovieView.css";

export default function MovieView({ movie }) {
  return (
    <div className="movieviewdiv">
      {movie ? (
        <>
          <h1>{movie.original_title}</h1>
          <img
            alt={`Backdrop ${movie.original_title}`}
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
          <p> {movie.overview} </p>
          <p>{movie.release_data}</p>
        </>
      ) : (
        <p>Choose a movie</p>
      )}
    </div>
  );
}
