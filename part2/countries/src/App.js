import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  // state:
  
  const [query, setQuery] = useState([])
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  // api handler

  useEffect(() => {
    // fetch counry data from: https://restcountries.eu/rest/v2/all
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      }
      )
  }, [])

  // event handlers:

  const handleShowClick = country => {
    // when the button next to a country is show, display details
    setFilteredCountries([country])
  }

  const handleInput = event => {
    filterCountryResult()
    return setQuery(event.target.value)
  };

  // helper functions:

  const filterCountryResult = () => {
    // using the typed in input, filter to retrieved list of countries
    setFilteredCountries(countries.filter((country) => {
      return country.name.toLowerCase().includes(query)
    }))
  }

  return (
    <div>
      find countries
      <input value={query} onChange={handleInput} />
      <Countries
        filteredCountries={filteredCountries}
        handleShowClick={handleShowClick}
        query={query}
      />
    </div>
  );
}

export default App;
