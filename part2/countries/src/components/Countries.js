import CountryDetails from './CountryDetails'
import CountryList from './CountryList'

const Countries = ({ filteredCountries, handleShowClick, query }) => {

    if (query === '') {
        return <p>Search to filter countries.</p>
    } else if (filteredCountries.length > 10) {
        return <p>Please narrow your search.</p>
    } else if (filteredCountries.length === 1) {
        return <CountryDetails country={filteredCountries[0]} />
    }

    return <CountryList
        filteredCountries={filteredCountries}
        handleShowClick={handleShowClick}
    />
}


export default Countries;