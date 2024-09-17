import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Career from './Pages/Career';
import Blog from './Pages/Blog';

function App() {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
