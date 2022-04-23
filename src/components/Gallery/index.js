import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import rezImage from "../../assets/cover/cjsmith011-resume.JPG";

//import PhotoList from './Photolist';

function Gallery() {
    return (
        <section className="my-5">
            <h1 id="about">Resume</h1>
            <img src={rezImage} 
            link="C:\Users\ronal\OneDrive\Documents\GitHub\my-web-portfolio\src\assets\Carlie Smith resume 2022.docx"
            className="my-2" style={{ width: "40%" }} alt="cover" />
        </section>

           );
}

export default Gallery;