import React from 'react'
import SelectedCountry from './SelectedCountry'

const FilteredCountries = ({ filteredCountries, setSelectedCountry }) => {
  if (filteredCountries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if (filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map(c => <p key={c.numericCode}>{c.name} <button onClick={() => setSelectedCountry(c)}>show</button></p>)}
      </div>
    )
  }

  if (filteredCountries.length === 1) {
    return (
      <SelectedCountry country={filteredCountries[0]} />
    )
  }

  if (filteredCountries.length === 0) {
    return null
  }
}

export default FilteredCountries