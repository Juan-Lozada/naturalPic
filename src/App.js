import "./styles.css";
import { useState, useEffect, useContext } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Galeria from './components/Galeria'

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import useImage from "./Hook/useImage";

export default function App() {
  const {setImages} = useImage()

  useEffect(() => {
    const getFotos = async () => {
      const endpoint = "/fotos.json";

      const response = await fetch('http://localhost:3000/' + endpoint)
      const data = await response.json()

      setImages(data.photos)     
      console.log(data.photos)
  }

    getFotos();
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

