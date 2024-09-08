import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
