import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';


function App() {
  


  return (
    <div >
      <Nav
 
     ></Nav>
        <main>
          <About></About>
          <ContactForm></ContactForm>
          <Portfolio></Portfolio>
          <Resume></Resume>
        </main>
     
    </div>

  );
}

export default App;