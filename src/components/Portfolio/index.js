import React from 'react';
import {Link} from 'react-router-dom';

import githubImage from "../../assets/cover/Octocat.jpg";
import ghlinkImage from "../../assets/cover/GitHub-Mark-Light-64px.png";




function Portfolio() {
    return (
        <section className="my-5">
            <h1 id="about">Check out my projects!</h1>
            <img src={githubImage} className="my-2" style={{ width: "10%" }} alt="github link" /> 
            <ul>
              <li>
                <img src ={ghlinkImage} style={{ width: "5%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/budget-tracker.git"}}>Github: Track your $$$ with Budget-Tracker</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/budget-tracker/"}}> || Deployed site: Budget-Tracker</a>
              </li>

              <li>
                <img src ={ghlinkImage} style={{ width: "5%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/Marvel-Mythos.git"}}>Github: Find your fave superheroes</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/Marvel-Mythos/"}}> || Deployed site: Marvel-Mythos</a>
              </li>

              <li>
                <img src ={ghlinkImage} style={{ width: "5%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/run-buddy.git"}}>Github: Get Active!</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/run-buddy/"}}> || Deployed site: Run-Buddy</a>
              </li>

              <li>
                <img src ={ghlinkImage} style={{ width: "5%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/pizza-hunt.git"}}>Github: Share you pizza passion</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/pizza-hunt/"}}> || Deployed site: Pizza-Hunt</a>
              </li>

              <li>
                <img src ={ghlinkImage} style={{ width: "5%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/weather-watch.git"}}>Github: Know the weather before you go</a>
                <a onClick={() => {window.location.href="https://cjsmith011.github.io/weather-watch/"}}> || Deployed site: Weather-watch</a>
              </li>

              <li>
                <img src ={ghlinkImage} style={{ width: "5%"}}></img>
                <a onClick={() => {window.location.href="https://github.com/cjsmith011/get-social.git"}}>Github: Share your thoughts</a>
                <a onClick={() => {window.location.href="https://drive.google.com/file/d/1746FpZ-KJ5EAE3fbqo5OHWWwD6OrDimZ/view"}}> || Deployed site: Get-social</a>
              </li>


            </ul>
        </section>

           );
}

export default Portfolio;
