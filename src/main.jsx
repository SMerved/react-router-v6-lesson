import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/main.css'
import Home from "./components/Home.jsx";
import Workshops from "./components/Workshops.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/workshops" element={<Workshops/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
