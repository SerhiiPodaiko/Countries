import { useNavigate } from "react-router-dom";
import Proptypes from "prop-types";

const CountryItem = ({ item }) => {
    const navigate = useNavigate();

    const onCountyClick = (code) => {
        navigate("/country-info", { state: {data: code} })
    };

    return (
        <li className="list-item col-lg-3 col-md-4 col-sm-6" onClick={() => onCountyClick(item.countryCode)}>
            <span className="code">{item.countryCode}</span>
            <span className="text-success">{item.name}</span>
        </li>
    )
}

CountryItem.propTypes = {
    item: Proptypes.object.isRequired
}

export default CountryItem;
