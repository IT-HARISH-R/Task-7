const SearchBar = ({ onSearch, onFilterChange }) => {
    return (
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="flex-grow p-2 border rounded-lg"
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          {/* <option value="episode">Episodes</option> */}
        </select>
      </div>
    );
  };
  
  export default SearchBar;
  