import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import linkedin from './assets/img/LI-Logo.png';


function App() {
  


  return (
    <div >
      <Nav></Nav>
        <main>
          <About></About>
          <ContactForm></ContactForm>
          <Portfolio></Portfolio>
          <Resume></Resume>
        
        </main>
        <>
      
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          height: 150,
          backgroundColor: "var(--primary)",
        }}
      >
        Built with React by Carlie Smith,            2022 MSU Bootcamp: Click on the links below to find me 
        <p onClick={() => {window.location.href="https://www.linkedin.com/in/carlie-smith-adventurer/"}}>LinkedIn: carlie-smith-adventurer</p>
        <p onClick={() => {window.location.href="https://github.com/cjsmith011"}}>GitHub: cjsmith011</p>
        <p onClick={() => {window.location.href="https://www.facebook.com/carlie.smith.566"}}>Facebook: carlie.smith.566</p>
      </div>
    </>
    </div>
    

  );
}

export default App;