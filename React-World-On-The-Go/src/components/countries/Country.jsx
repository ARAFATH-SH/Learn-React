import { useState } from 'react'; 
import './country.css';

const Country = ({country,handelVisitedCountries,handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handelVisitedCountries(country);
    }

    return (
        <div className={`country ${visited ? `country-visited` : ''}`}>
            
            <h2>Name: {country.name}</h2>
            <div>
                <img src={country.flag} alt={country.name} width="100px" height="50px"/>
            </div>
            <p><span style={{color: "White", fontWeight: "bold"}}>iso2: </span> {country.iso2}</p>
            <p><span style={{color: "White", fontWeight: "bold"}}>iso3: </span> {country.iso3}</p>

            <button onClick={handleVisited}>
                {visited ? 'Visited' : "Not Visited"}
            </button>

            <button onClick={() => handleVisitedFlag(country.flag)}>Add visited flag</button>

        </div>
    );
};

export default Country;