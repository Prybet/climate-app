import axios from "axios";
import { createContext, useState } from "react";

const ClimateContext = createContext();

const ClimateProvider = ({ children }) => {



    const [search, setSearch] = useState({
        city: '',
        country: ''
    });

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [noResult, setNoResult] = useState("");

    const searchData = e => {
        setSearch({
            ...search,
            [e.target.name]: [e.target.value]
        })
    }

    const getClimate = async search => {
        setLoading(true);
        setNoResult(false);
        try {
            const { city, country } = search;
            const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url1).catch(err => null);


            const { lat, lon } = data[0];

            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;

            const { data: climate } = await axios(url2).catch(err => null);
            setResult(climate);

        } catch (error) {
            setNoResult("No hay resultado");
        } finally {
            setLoading(false);
        }
    }

    return (
        <ClimateContext.Provider
            value={{
                search,
                searchData,
                getClimate,
                result,
                loading,
                noResult
            }}
        >
            {children}
        </ClimateContext.Provider>
    )
}

export {
    ClimateProvider
}

export default ClimateContext;