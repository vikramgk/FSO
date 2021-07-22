const CountryList = ({ filteredCountries, handleShowClick }) => {
    return filteredCountries.map(country => {
        return <div key={country.alpha2Code}>
            <p >{country.name}</p>
            <button onClick={() => handleShowClick(country)}>show</button>
        </div>
    })
}

export default CountryList;