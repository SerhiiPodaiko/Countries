import React, { useEffect } from "react"
import { useLocation, Link } from "react-router-dom";
import useCountry from "../../hooks/useCounry";

const CountryInfo = () => {
    const { state: { data }} = useLocation();
    const { loading, errorMessage, countryInfoHolidays, getAllCountryHolidays } = useCountry();

    useEffect(() => {
        getAllCountryHolidays(data);
    }, []);

    return (
        <div className="container">
            <Link to="/"
                  className="btn btn-outline-success mt-3 mb-4 text-decoration-none text-dark">
                Back to list
            </Link>
            <h1 className="text-success">Holidays</h1>
            <ul className="list-group d-flex w-75 m-auto">

                { errorMessage &&  <div className="text-danger d-flex justify-content-center mt-5">{errorMessage}</div> }

                { loading ? <div className="text-success d-flex justify-content-center mt-5">Loading...</div> :
                    countryInfoHolidays.map(item => (
                        <li key={item.date} className="list-group-item d-flex align-items-center justify-content-between p-3">
                            <div className="d-flex flex-column position-relative">
                                <span className="code position-static">{item.countryCode}</span>
                                <span>Date: <strong>{item.date}</strong></span>
                            </div>
                            <span className="text-success"><strong>{item.localName}</strong></span>
                        </li> )) }
            </ul>
        </div>
    )
}

export default CountryInfo;
