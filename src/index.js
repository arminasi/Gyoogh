import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./nav/Nav";
import Contact from "./paths/contact/Contact";
import Offers from "./paths/offers/Offers";
import Villages from "./paths/villages/Villages";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="villages" element={<Villages />} />
      <Route path="Offers" element={<Offers />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);