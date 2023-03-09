import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import {About} from './pages/about/About';
import ProductDetails from './components/molecules/product-details/product-details';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route path="/productDetails/:productId" element={<ProductDetails/>}/>
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
