export const MovieView = ({ movie, onBackClick }) => {
  console.log("Rendering MovieCard:", movie);

  return (
    <div>

      <div>
        <img src={movie.image} />
      </div>

      <div>
        <span> Title: </span>
        <span>{movie.title}</span>
      </div>

      <div>
        <span> Description: </span>
        <span>{movie.description}</span>
      </div>

      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>

      <div> <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>

      <div> <button onClick={onBackClick}>Back</button>
      </div>

    </div>
  );
};
