import React from 'react';

import rezImage from "../../assets/cover/cjsmith011-resume.JPG";

//import PhotoList from './Photolist';

function Resume() {
    return (
        <section className="my-5">
            <h1 id="about">Resume</h1>
            <a onClick={() => {window.location.href="https://github.com/cjsmith011/my-web-portfolio/blob/main/src/assets/Carlie%20Smith%20resume%202022.docx?raw=true"}}>Click here for a downloadable resume</a>
    
            <li>
            <img src={rezImage} className="my-2" style={{ width: "40%" }} alt="cover"></img>
            </li>
        </section>

           );
}

export default Resume;