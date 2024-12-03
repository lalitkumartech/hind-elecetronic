
import { Router } from 'react-router-dom';
import Layout from './All-components/Layout';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from './All-components/menupages/Contact';
import Gallery from './All-components/menupages/Gallery';
import About from './All-components/menupages/About';
import Categories from './All-components/Landing-page/Categories';




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
