import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navegation from "../components/Navegation";
import Home from "../pages/Home";
import ListaPaciente from "../pages/ListaPaciente";
import Login from "../pages/Login";
import Registrar from "../pages/Registrar";

const RouteApp = () => {

  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="control-personal" element={<ListaPaciente />} />
      </Routes>
  );
};

export default RouteApp;
