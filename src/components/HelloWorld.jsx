import React, { Component } from 'react';
import countryData from '../api';

class HelloWorld extends Component {
    render() {

        return (
            <div>

                {countryData.all().map(country => {


                    return (
                        <li key={country.id}>
                            <p>{country.name}</p>
                            <p>{country.details}</p>
                        </li>

                    );


                })}
            </div>
        )
    }
}




export default HelloWorld;
