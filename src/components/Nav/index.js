
import React, {useEffect} from 'react';
import devImage from '../../assets/img/dev-image.JPG';
import Footer from '../Footer';

function Nav() {

    

      
  return (
    <header className='flex-row px-1'>
        <h2>
            <a data-testid="link" href="/">
                <img src={devImage} style={{ width: "10% "}}/> Portfolio for Carlie Smith
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid = "about" href="#about">About me</a>
                </li>
                <li className='mx-2'>
                    <a data-testid = "contact" href="#contact">Contact</a>
                </li>
                <li className='mx-2'>
                    <a data-testid = "portfolio" href="#portfolio">Portfolio</a>
                </li>
                <li className='mx-2'>
                    <a data-testid = "resume" href="#resume">My Resume</a>
                </li>
              
            </ul>
        </nav>

    </header>
 
    
  )
}

export default Nav;