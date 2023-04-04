import React from "react";
import { useNavigate } from "react-router-dom";
import Navegation from "./components/Navegation";
import RouteApp from "./routes/RouteApp";

const App = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navegation />
      <RouteApp />
    </>
  );
};

export default App;
