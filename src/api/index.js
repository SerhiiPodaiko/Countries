import axios from "axios";

class CountryServiceApi {
    _baseUrl = "https://date.nager.at/api/v3";

    async getAllCountries() {
        try {
            const response = await axios.get(`${this._baseUrl}/AvailableCountries`);

            return {
                data: await response.data
            }

        } catch (e) {
            return {
                error: e.message
            }
        }
    }

    async getAllCountryHolidays(countryCode) {
        try {
            const response = await axios.get(`${this._baseUrl}/NextPublicHolidays/${countryCode}`);

            return {
                data: await response.data
            }

        } catch (e) {
            return {
                error: e.message
            }
        }
    }
}

export default new CountryServiceApi();
