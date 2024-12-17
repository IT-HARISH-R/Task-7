import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
      alt={movie.Title}
      className="w-full h-64 object-cover mb-4 rounded-lg"
    />
    <h3 className="text-lg font-semibold">{movie.Title}</h3>
    <p className="text-gray-500">Year: {movie.Year}</p>
    <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 mt-2 block">
      Details
    </Link>
  </div>
);

export default MovieCard;
