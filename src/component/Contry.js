import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


function Contry() {

    const [country, setCountry] = useState([])
    const {name} = useParams()

    const fetchCountry = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        const country = await response.json()
        setCountry(country)
        // console.log({country});
    }
    


    useEffect(() => {
        fetchCountry()
    })

        
    return (
        <>  
            <div className="back">
                <Link to='/'><i class="fa fa-arrow-left" aria-hidden="true">Back</i></Link>
            </div>
            <section>
                {country.map((c) => {
                    const {
                        numericCode,
                        flag,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borders
                    } = c



                    return <article key={numericCode} className="country">
                        <img src={flag} alt={name}/>
                        <div className="info">
                            <h1>{name}</h1>
                            <div className="subinfo">
                                <ul className="first">
                                    <li>Native Name: <span>{nativeName}</span></li>
                                    <li>Population: <span>{population}</span></li>
                                    <li>Region: <span>{region}</span></li>
                                    <li>Sub Region: <span>{subregion}</span></li>
                                    <li>Capital: <span>{capital}</span></li>
                                </ul>
                                <ul className="second">
                                    <li>Top Level Domain: <span></span>{topLevelDomain}</li>
                                    <li>Currencies: {currencies.map(currencies =><span className='currencies'>  {currencies.name} </span>)}</li>
                                    <li>Languages: {languages.map(language =><span className='language'> {language.name} </span> )}</li>
                                </ul>
                            </div>
                            <div className='borders'>
                                <h3>Border Countries:</h3>
                                {borders.map(border => <button>{border}</button>)}
                            </div>
                        </div>
                    </article>
                })}
            </section>
        </>
    )
}

export default Contry
