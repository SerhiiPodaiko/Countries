import CountryList from "./components/country-list/CountryList";
import useCountry from "./hooks/useCounry";
import SearchForm from "./components/search-form/SearchForm";

const App = () => {
 const { term, setTerm, loading, errorMessage,
     searchCountry, clearFilters, countries, filterCountries, setFilterCountries } = useCountry();

  return (
     <>
         <nav className="navbar bg-success w-100 shadow">
            <div className="container">
                <h1 className="title text-white navbar-brand">Search Countries</h1>
            </div>
         </nav>
         <div className="container mt-1">
             <SearchForm
                 term={term}
                 setTerm={setTerm}
                 filterCountries={filterCountries}
                 setFilterCountries={setFilterCountries}
                 clearFilters={clearFilters} />

             { searchCountry?.length === 0 &&
                <h4 className="text-danger text-center mt-5">The list is empty</h4> }

             { errorMessage &&
                <div className="text-danger d-flex justify-content-center mt-5">{errorMessage}</div> }

             { loading ?
                     <div className="text-success d-flex justify-content-center mt-5">Loading...</div> :
                     <CountryList items={countries} />
             }
         </div>
     </>
  );
}

export default App;
