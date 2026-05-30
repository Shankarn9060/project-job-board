// components/SearchBar.js

function SearchBar({ search, setSearch }) {

  return (

    <div className="search-wrapper">

      <div className="search-container">

        <input
          type="text"
          className="search-input"
          placeholder="Search jobs, companies, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />



        {/* SEARCH ICON */}

        <i className="bi bi-search search-icon"></i>

      </div>

    </div>

  );
}

export default SearchBar;