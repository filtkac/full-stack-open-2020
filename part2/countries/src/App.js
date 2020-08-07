import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import FilteredCountries from './components/FilteredCountries'
import SelectedCountry from './components/SelectedCountry'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState()

  useEffect(() => {
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setSelectedCountry()
  }

  return (
    <div>
      find countries <input value={search} onChange={handleSearchChange} />
      <br />
      <FilteredCountries filteredCountries={filteredCountries} setSelectedCountry={setSelectedCountry} />
      {selectedCountry !== undefined && <SelectedCountry country={selectedCountry} />}
    </div>
  )
}

export default App;
