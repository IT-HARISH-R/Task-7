import { useState, useEffect } from "react";
import { fetchMovies, fetchFilteredMovies } from "../services/omdbService";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const Home = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [filter, setFilter] = useState(""); // Movie Type filter

    const handleSearch = async (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
        fetchMovieData(searchQuery, filter, 1);
    };

    const handleFilterChange = async (type) => {
        setFilter(type);
        setPage(1);
        fetchMovieData(query, type, 1);
    };

    const fetchMovieData = async (searchQuery, type, currentPage) => {
        setLoading(true);
        setError("");
        try {
            const data = type
                ? await fetchFilteredMovies(searchQuery, type, currentPage)
                : await fetchMovies(searchQuery, currentPage);
            if (data.Response === "True") {
                setMovies(data.Search);
                setTotalResults(Number(data.totalResults));
            } else {
                setError(data.Error || "No results found.");
                setMovies([]);
                setTotalResults(0);
            }
        } catch (err) {
            setError("An error occurred while fetching movies.");
            setMovies([]);
            setTotalResults(0);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (query) {
            fetchMovieData(query, filter, page);
        }
    }, [page]);

    return (
        <div className="container mx-auto p-4">
            <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
            {error && <p className="text-red-500">{error}</p>}
            {loading ? (
                // <p>Loading...</p>
                <img src="https://www.tecnodux.com.br/custom/content/themes/Tecnomotor/assets/img/loading.gif"
                    alt="Loading..." 
                    className="fixed bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]
                    w-[100px] h-[100px]"/>
            ) : (
                <MovieList movies={movies} />
            )}
            <Pagination
                currentPage={page}
                totalResults={totalResults}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </div>
    );
};

export default Home;
