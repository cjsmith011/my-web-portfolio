import React from "react";
import devImage from "../../assets/cover/dev-image.JPG";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me!</h1>
            <img src={devImage} className="my-2" style={{ width: "10%" }} alt="cover" />
        </section>

           );
}



export default About;