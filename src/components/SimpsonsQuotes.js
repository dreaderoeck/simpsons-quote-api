import React from 'react';


function SimpsonsQuotes({ quotes }) {
    return (

        <div className="SimpsonsQuotes">
            <img src={quotes.image} alt={quotes.character} />
            <h1>{quotes.character}</h1>
            <ul>
                <li>{quotes.quote}</li>
            </ul>
           
        </div>
    );
}





export default SimpsonsQuotes;