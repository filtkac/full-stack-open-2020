import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const SelectedCountry = ({ country }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    Axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
      .then(response => setWeather(response.data))
  }, [country.capital])

  return (<div>
    <h1>{country.name}</h1>
    <p>
      capital {country.capital}
    </p>
    <p>
      population {country.population}
    </p>
    <h2>languages</h2>
    <ul>
      {country.languages.map(l => <li key={l.iso639_1}>{l.name}</li>)}
    </ul>
    <img src={country.flag} alt={`${country.name} flag`} width='200' />
    {weather !== undefined && <Weather weather={weather} />}
  </div>)
}

const Weather = ({ weather }) =>
  <div>
    <h2>Weather in {weather.location.name}</h2>
    <p>
      <b>temperature: </b>{weather.current.temperature} Celsius
    </p>
    <img src={weather.current.weather_icons} alt={weather.current.weather_descriptions} width='50' />
    <p>
      <b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}
    </p>
  </div>

  export default SelectedCountry