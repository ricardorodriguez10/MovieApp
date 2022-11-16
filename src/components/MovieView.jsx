export default function MovieView({ movie }) {
  return (
    <div style={{ background: "#f1f1f1", width: "100%", height: "100%" }}>
      {movie ? (
        <>
          <h1>{movie.original_title}</h1>
          <p> {movie.overview} </p>
          <p>{movie.release_data}</p>
        </>
      ) : (
        <p>Choose a movie</p>
      )}
    </div>
  );
}
