import React from 'react';
import footerapi from '../../api/footerapi.json';
import { FaLeaf } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";


const Footer = () => {

        const footerIcon = {
                FaLeaf:<FaLeaf />,
                FaMobileAlt:<FaMobileAlt />,
                FaHeadset:<FaHeadset />


        }
  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols'>
        {footerapi.map((curData, index) => {
          const { icon, title, details } = curData;
          

          return (
            <div className='footer-contact' key={index}>
              <div className='icon'>{footerIcon[icon]}</div>
              <p>{title}</p>
              <p>{details}</p>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
