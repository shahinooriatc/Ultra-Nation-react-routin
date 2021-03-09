import React, { useEffect, useState } from 'react';
import './CountryDetails.css';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { countryname } = useParams();

    const [contry, setCountry] = useState({});
    const { flag, name, alpha2Code, capital, region, population, languages} = contry;

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryname}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .catch(error => console.log(error));
    }, []);
    console.log(contry);
    return (
        <div className='countryDetails text-center'>
            <img style={{ width: '350px' }} src={flag} alt="Image Loading..." />
            <h3 style={{ color: 'brown' }}>Country Name : {name}</h3>
            <h4>Alpha2Code : {alpha2Code} </h4>
            <h4>Capital Name : {capital}</h4>
            <h4>Region Name : {region}</h4>
            <h4>Population : {population}</h4>
            <h4>Population : {languages?.[0].name}</h4>

            {/* {
                languages && languages.map(data => data.name)
            } */}

        </div>
    );
};

export default CountryDetails;