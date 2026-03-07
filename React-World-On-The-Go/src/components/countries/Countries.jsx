import { use } from 'react';
import { useState } from 'react';
import Country from './Country';
import './countries.css';
export default function Countries({CountriesPromise}){

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const countries = use(CountriesPromise);

    const handelVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }   
    return(
        <div>
            <h1>Countries: {countries.data.length}</h1>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <div>
                {
                    visitedFlag.map(flag => <img src ={flag} alt="visited flag" width="50px" height="30px"/>)
                }
            </div>
            <ol>
                {visitedCountries.map((country) => <li key={country.iso2}>{country.name}</li>)}
            </ol>

            <div className='countries'>
                {countries.data.map((country)=> <Country 
                key={country.iso2}
                handelVisitedCountries = {handelVisitedCountries}
                handleVisitedFlag = {handleVisitedFlag} 
                country={country}
                ></Country>)}
            </div> 
            
        </div>
    )
}