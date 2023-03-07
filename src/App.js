import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import {About} from './pages/about/About';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;
