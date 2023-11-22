import React from "react";
import "./style.css"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import { Items } from "./pages/Items";
import { Checkout } from "./pages/Checkout";
export const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Items />}/>
        <Route path="/checkout" element = {<Checkout />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

