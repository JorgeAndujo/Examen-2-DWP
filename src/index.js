import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

localStorage.setItem(
  "data",
  JSON.stringify([
    {
      id: 1,
      name: "Francisco",
      lastname: "Perez",
      age: 30,
      curp: "asdsa",
      address: "solo la calle",
      phone: 123456,
      email: "example@gmail.com",
      height: 1.7,
      weight: 1.7,
      category: "paciente",
    },
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
