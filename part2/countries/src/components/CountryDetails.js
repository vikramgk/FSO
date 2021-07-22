import axios from "axios";
import { useEffect, useState } from "react";

const CountryDetails = ({ country }) => {
    const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${REACT_APP_WEATHER_API_KEY}&query=${country.name}`)
            .then(response => {
                console.log(JSON.stringify(response.data, null, 2))
                setWeather(response.data.current)
            })
    }, [])


    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {JSON.stringify(country.population)}</p>
            <h2>languages</h2>
            <div>
                <ul>
                    {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
                </ul>
            </div>
            <div>
                <img alt='flag' height="50px" src={country.flag} />
            </div>
            {Object.keys(weather).length != 0 ? <div><h2>weather in {country.name}</h2>
                <img alt='weather-icon' src={weather.weather_icons} />
                <div>
                    temperature: {JSON.stringify(weather.temperature)} degrees
                </div>
                <div>
                    uv index: {JSON.stringify(weather.uv_index)}
                </div>
            </div>
                : <p>Loading weather</p>
            }

        </div>
    )
}

export default CountryDetails;