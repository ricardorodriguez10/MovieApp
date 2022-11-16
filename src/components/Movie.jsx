export default function Movie({ movie, onClick }) {
  const handleOnClick = () => {
    onClick(movie);
  };

  return (
    <div
      style={{
        background: "#f3f3f3",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        display: "flex",
        flexDirection: "row",
      }}
      onClick={handleOnClick}
    >
      <img
        style={{
          borderRadius: 8,
          width: "40%",
          objectFit: "cover",
          marginRight: 16,
        }}
        alt={`Backdrop ${movie.original_title}`}
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      />
      <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <h4>{movie.original_title}</h4>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
