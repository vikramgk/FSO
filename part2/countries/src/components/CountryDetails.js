const CountryDetails = ({ country }) => {
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
        </div>
    )
}

export default CountryDetails;