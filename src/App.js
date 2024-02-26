// import Home from './Components/Home/Home';
// import About from './Components/About/About';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import {Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />}/>
    </Routes>
    {/* <Contact /> */}
    </>
  );
}

export default App;
