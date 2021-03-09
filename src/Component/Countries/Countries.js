import React from 'react';
import './Countries.css';
import { Link } from "react-router-dom";

const Countries = (props) => {
    const { flag, name } = props.getdata;
    return (
        <div>
            <div className="countries text-center">
                <img className='flagsize' src={flag} alt="Image Loding" />
                <h4> {name}</h4>
                <Link to={`/CountryDetails/${name}`}>
                    <button className='seeDetails'>See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Countries;