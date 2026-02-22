import { use } from 'react';
import Country from './Country';
export default function Countries({CountriesPromise}){
    const countries = use(CountriesPromise);
    
    return(
        <div>
            <h1>Countries: {countries.data.length}</h1> 
            {
                countries.data.map((country)=> <Country key={country.iso2} country={country}></Country>)
            }
        </div>
    )
}