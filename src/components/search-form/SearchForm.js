const SearchForm = ({ term, setTerm, clearFilters, filterCountries, setFilterCountries }) => {
    return (
        <form className="search-field w-50 m-auto d-flex" onSubmit={e => e.preventDefault()}>
            <button type="button" className="btn btn-outline-success me-2"
                    onClick={() => setFilterCountries(!filterCountries)}>
                { filterCountries ? "ASC" : "DESC" }
            </button>

            <input id="search"
                   type="search"
                   value={term}
                   onChange={e => setTerm(e.target.value)}
                   placeholder="Search..."
                   className="form-control" />

            <button type="button"
                    disabled={!term && filterCountries}
                    className="btn btn-outline-secondary ms-2" onClick={clearFilters}>
                Reset
            </button>
        </form>
    )
}

export default SearchForm;

