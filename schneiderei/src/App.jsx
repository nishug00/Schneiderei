import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import StartNow from './Pages/StartNow/StartNow';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import MyAccount from './Pages/MyAccount/MyAccount';
import Contact from './Pages/Contact/Contact';
import Basket from './Pages/Basket/Basket';
import ClothingCategory1 from './Pages/StartNow/ClothingCategory/Hosen/clothingCategory1';
import ClothingCategory2 from './Pages/StartNow/ClothingCategory/Jacken-Mäntel/clothingCategory2';
import ClothingCategory3 from './Pages/StartNow/ClothingCategory/Jackett-Sakko-Blazer/clothingCategory3';
import ClothingCategory4 from './Pages/StartNow/ClothingCategory/Rock/clothingCategory4';
import ClothingCategory5 from './Pages/StartNow/ClothingCategory/Kleid/clothingCategory5';
import ClothingCategory6 from './Pages/StartNow/ClothingCategory/Weste/clothingCategory6';
import ClothingCategory7 from './Pages/StartNow/ClothingCategory/Jumpsuits/clothingCategory7';
import ClothingCategory8 from './Pages/StartNow/ClothingCategory/Weitere Oberteile/clothingCategory8';
import ServiceCategory1 from './Pages/StartNow/ServicesCategory/Patches Aufnäher annähen/serviceCategory1';
import ServiceCategory2 from './Pages/StartNow/ServicesCategory/Vorhänge Gardinen/serviceCategory2';
import ServiceCategory3 from './Pages/StartNow/ServicesCategory/Bettwäsche/serviceCategory3';
import ServiceCategory4 from './Pages/StartNow/ServicesCategory/Taschen/serviceCategory4';
import ServiceCategory5 from './Pages/StartNow/ServicesCategory/Kissen/serviceCategory5';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HowItWorks/>} />
        <Route path="/startNow" element={<StartNow />} />
        <Route path="/work" element={<HowItWorks />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/clothingCategory1" element={<ClothingCategory1 />} />
        <Route path="/clothingCategory2" element={<ClothingCategory2 />} />
        <Route path="/clothingCategory3" element={<ClothingCategory3 />} />
        <Route path="/clothingCategory4" element={<ClothingCategory4 />} />
        <Route path="/clothingCategory5" element={<ClothingCategory5 />} />
        <Route path="/clothingCategory6" element={<ClothingCategory6 />} />
        <Route path="/clothingCategory7" element={<ClothingCategory7 />} />
        <Route path="/clothingCategory8" element={<ClothingCategory8 />} />
        <Route path="/serviceCategory1" element={<ServiceCategory1 />} />
        <Route path="/serviceCategory2" element={<ServiceCategory2 />} />
        <Route path="/serviceCategory3" element={<ServiceCategory3 />} />
        <Route path="/serviceCategory4" element={<ServiceCategory4 />} />
        <Route path="/serviceCategory5" element={<ServiceCategory5 />} />
      </Routes>
    </BrowserRouter>
  );
}
