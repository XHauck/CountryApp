import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const fetchCountryData = async () => {

        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
    }


    useEffect(() => {
        fetchCountryData()}, [] )

    return (
        <>
            <section className='grid'>
                {countries.map((country) => {
                    const {
                        numericCode, 
                        name, 
                        // nativeName, 
                        flag,  
                        capital, 
                        population, 
                        region, 
                        // subregion,
                        // topLevelDomain,
                        // currencies
                    } = country

                    return <article key = {numericCode}>
                        <Link to={`/countries/${name}`} style={{ textDecoration: 'none' }}>
                        <div className='block'>
                            <img src={flag} alt={name} />
                            <div className='details'>
                                <h3>{name}</h3>
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                            </div>
                        </div>
                        </Link>
                    </article>
                })}
            </section>            
        </>
    )
}

export default Countries
