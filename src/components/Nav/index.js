import { capitalizeFirstLetter } from '../../utils/helpers';
import React, {useEffect} from 'react';
import devImage from '../../assets/cover/dev-image.JPG';

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
                    <span>Contact</span>
                </li>
                <li className='mx-2'>
                    <span>Portfolio</span>
                </li>
                <li className='mx-2'>
                    <span>Resume</span>
                </li>
              
            </ul>
        </nav>

    </header>
  )
}

export default Nav;