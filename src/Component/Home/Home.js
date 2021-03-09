import React, { useEffect, useState } from 'react';
import './Home.css';
import Countries from '../Countries/Countries';


const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(countrydata => setCountry(countrydata))
            .catch(error => console.log(error));
    }, [])
    return (
        <div className='home'> 
            {
                country.map(getdata => <Countries getdata={getdata}></Countries>)    
            }
        </div>
    );
};

export default Home;