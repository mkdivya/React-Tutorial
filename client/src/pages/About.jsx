import React from 'react';
import countryData from '../api/countryData.json';

const About = () => {
        return(
               <section className='section-about container'>
                <h1 className='container-title'>Here are some interesting facts
                <br />
                About the world
                </h1>


                <div className='gradient-cards'>

{
                        countryData.map((country) => {

                                const{id,countryName,capital,population,interestingFacts}=country;
                                return(
                                        <div className='card' key={id}>
                                <div className='container-card bg-blue-box'>
                                        <p>{countryName}</p>
                                        <p><span className='card-description'>Capital:</span>{capital}</p>

                                        
                                        <p><span className='card-description'>Population:</span>{population}</p>

                                        
                                        <p><span className='card-description'>Interesting Facts</span>{interestingFacts}</p>
                                </div>
                        </div>
                                )
                        })
}

                        
                </div>
               </section>
        )
}
export default About;