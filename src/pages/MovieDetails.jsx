import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/omdbService";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-64 my-4" />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Cast:</strong> {movie.Actors}</p>
    </div>
  );
};

export default MovieDetails;
