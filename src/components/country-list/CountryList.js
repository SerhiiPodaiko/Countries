import Proptypes from "prop-types";
import CountryItem from "../country-item/CountryItem";

const CountryList = ({ items }) => {
    return (
        <ul className="list-items row m-0">
            {items.map(item => (
                <CountryItem item={item} key={item.countryCode} />
            ))}
        </ul>
    )
}

CountryList.propTypes = {
    items: Proptypes.array.isRequired
}

export default CountryList;

