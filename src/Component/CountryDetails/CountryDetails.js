import React, { useEffect, useState } from 'react';
import './CountryDetails.css';
import { useParams } from 'react-router';
import CountryProfile from '../CountryProfile/CountryProfile';

const CountryDetails = () => {
    const { countryname } = useParams();

    const [contry, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryname}`)
            .then(res => res.json())
            .then(data => setCountry(data))
            .catch(error => console.log(error));
    }, []);

    return (
       <div className='countryDetails'>
           {
               contry.map( gets => <CountryProfile gets ={gets}></CountryProfile>)
           }           
       </div>
    );
};

export default CountryDetails;