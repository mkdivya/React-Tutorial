import React from 'react';
// import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const HeroSection = () => {
        return(
               <main className='hero-section main'>
                <div className='container grid grid-two-cols'>
                        <div className='hero-text'>
<h1 className='heading-xl'>Discover one country,at a time</h1>
<p className='paragraph'>The World Lorem ipsum dolor sit amet.</p>

<button className='btn btn-darken btn-inline bg-white-box'>Start exploring <FaLongArrowAltRight /></button>

                        </div>
                        <div className='hero-image'>
                                <img src="/images/hero-world.jpg" alt="Hero-world" />
                        </div>

                       
                </div>
                
               </main>
        )
}
export default HeroSection;