import React from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Linking
} from 'react-native';

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
                <h3 onPress={() => {
                  Linking.openURL('https://github.com/cjsmith011/budget-tracker.git');
                }}>$$Track your money$$ with Budget-Tracker</h3>
              </li>


            </ul>
        </section>

           );
}

export default Portfolio;