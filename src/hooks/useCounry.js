import { useEffect, useState} from "react";
import CountryService from "../api";

const useCountry = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [term, setTerm] = useState("");
    const [countryInfoHolidays, setCountryInfoHolidays] = useState([]);
    const [filterCountries, setFilterCountries] = useState(true);

    // Get all countries
    const getAllCountries = async () => {
        setLoading(true);

        const response = await CountryService.getAllCountries();

        response?.data ? setCountriesList(response.data) : setErrorMessage(response.error);

        setLoading(false);
    };

    // Get all country holidays
    const getAllCountryHolidays = async (countryCode) => {
        setLoading(true);

        const response = await CountryService.getAllCountryHolidays(countryCode);

        response?.data ? setCountryInfoHolidays(response.data) : setErrorMessage(response.error);

        setLoading(false);
    };

    // Search country
    const searchCountry = countriesList
        .filter(country => country.name.toLowerCase().includes(term.toLowerCase().trim()));

    // Sort countries
    let sortedCountries = filterCountries ?
        searchCountry.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) :
        searchCountry.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));

    // Clear filters
    const clearFilters = () => {
        setTerm("");
        setFilterCountries(true);
    };

    useEffect(() => {
        getAllCountries();
    }, []);

    return { loading, errorMessage, term, setTerm, countryInfoHolidays, getAllCountryHolidays,
        filterCountries, setFilterCountries, clearFilters, countries: sortedCountries }
}

export default useCountry;
