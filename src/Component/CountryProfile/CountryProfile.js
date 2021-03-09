import React from 'react';
import './CountryProfile.css';

const CountryProfile = (props) => {
    const singleprofile = props.gets;
    const {flag,name,alpha2Code,capital,region,population,timezones,languages,currencies} = singleprofile;
    return (
        <div className='countryProfile text-center'>
            <img style={{width:'350px'}} src={flag} alt="Image Loading..."/>
            <h3 style={{color:'brown'}}>Country Name : {name}</h3>
            <h4>Alpha2Code : {alpha2Code} </h4>
            <h4>Capital Name : {capital}</h4>
            <h4>Region Name : {region}</h4>
            <h4>Population : {population}</h4>
            <h4>Timezones : {timezones[0]}</h4>
            <h4>Languages : {languages[0].name}</h4>
            <h4>Currencies : {currencies[0].code} ({currencies[0].symbol})</h4>
        </div>
    );
};

export default CountryProfile;