import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


function App() {
  


  return (
    <div >
      <Nav
 
     ></Nav>
        <main>
          <ContactForm></ContactForm>
          <Gallery></Gallery>
            <About></About>
        </main>
     
    </div>

  );
}

export default App;