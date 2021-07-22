import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [query, setQuery] = useState([])
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  // control value of input [done]
  // useEffect to call api on mount [done]
  // if query is >10 prompt user to make more specific
  // if 10>x>1 then display list
  // if just one result, display basic data

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      }
      )
  }, [])

  const handleInput = event => {
    filterCountryResult()
    return setQuery(event.target.value)
  };

  const filterCountryResult = () => {
    setFilteredCountries(countries.filter((country) => {
      return country.name.toLowerCase().includes(query)
    }))
  }

  const renderCountryDetails = (soleCountry) => {
    return (
      <div>
        <h1>{soleCountry.name}</h1>
        <p>capital: {soleCountry.capital}</p>
        <p>population: {JSON.stringify(soleCountry.population)}</p>
        <h2>languages</h2>
        <div>
          <ul>
            {soleCountry.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
          </ul>
        </div>
        <div>
          <img alt='flag' height="50px" src={soleCountry.flag} />
        </div>
      </div>
    )
  }

  const displayCountries = () => {
    if (query === '') {
      return <p>Search to filter countries.</p>
    } else if (filteredCountries.length > 10) {
      return <p>Please narrow your search.</p>
    } else if (filteredCountries.length === 1) {
      const soleCountry = filteredCountries[0]
      return renderCountryDetails(soleCountry)
    }

    return filteredCountries.map(country => <p key={country.name}>{country.name}</p>)
  }

  return (
    <div>
      find countries
      <input value={query} onChange={handleInput} />
      <div>{displayCountries()}</div>
    </div>
  );
}

export default App;
