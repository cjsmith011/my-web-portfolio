import React from 'react';
import {Link} from 'react-router-dom';

import githubImage from "../../assets/img/Octocat.jpg";
import ghlinkImage from "../../assets/img/GitHub-Mark-Light-64px.png";
import budget from "../../assets/img/budgettracker.JPG";
import runbuddy from "../../assets/img/runbuddy.JPG";
import getsocial from "../../assets/img/getsocial.JPG";
import pizza from "../../assets/img/pizza.JPG";
import marvel from "../../assets/img/marvel.JPG";
import weather from "../../assets/img/weather.JPG";
import baddoglogo from "../../assets/img/Bad Dog logo.jpg";



function Portfolio() {
    return (
        <section className="my-5">
            <h1 id="portfolio">Check out my projects!</h1>
            <img src={githubImage} className="my-2" style={{ width: "10%" }} alt="github link" /> 
            <ul>
              <li>
                <img src ={budget} style={{ width: "20%" }}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/budget-tracker.git"}}>Github: Track your $$$ with Budget-Tracker</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/budget-tracker/"}}> || Deployed site: Budget-Tracker</a>
              </li>

              <li>
                <img src ={marvel} style={{ width: "20%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/Marvel-Mythos.git"}}>Github: Find your fave superheroes</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/Marvel-Mythos/"}}> || Deployed site: Marvel-Mythos</a>
              </li>

              <li>
                <img src ={runbuddy} style={{ width: "20%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/run-buddy.git"}}>Github: Get Active!</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/run-buddy/"}}> || Deployed site: Run-Buddy</a>
              </li>

              <li>
                <img src ={pizza} style={{ width: "20%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/pizza-hunt.git"}}>Github: Share you pizza passion</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/pizza-hunt/"}}> || Deployed site: Pizza-Hunt</a>
              </li>

              <li>
                <img src ={weather} style={{ width: "20%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/weather-watch.git"}}>Github: Know the weather before you go</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/weather-watch/"}}> || Deployed site: Weather-watch</a>
              </li>

              <li>
                <img src ={getsocial} style={{ width: "20%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/get-social.git"}}>Github: Share your thoughts</a>
                <a onClick={() => {window.location.href="https://drive.google.com/file/d/1746FpZ-KJ5EAE3fbqo5OHWWwD6OrDimZ/view"}}> || Deployed site: Get-social</a>
              </li>

              <li>
                <img src ={baddoglogo} style={{ width: "20%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/doctordutch/project3.git"}}>Github: Bad Dog Woodshop</a>
                <a onClick={() => {window.location.href="https://baddogshop.herokuapp.com/"}}> || Deployed site: Project3</a>
              </li>


            </ul>
        </section>

           );
}

export default Portfolio;
