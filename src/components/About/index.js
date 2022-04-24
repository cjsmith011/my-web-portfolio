import React from "react";
import cjImage from "../../assets/cover/cjphoto.jpg";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me!</h1>
            <img src={cjImage} className="my-2" style={{ width: "10%" }} alt="cover" />
            <h2>Bio:</h2>
            <h3>Recent graduate of MSU Web Development Coding BootCamp.  
                Focus on front end design and passion for data.</h3>
        </section>

           );
}



export default About;