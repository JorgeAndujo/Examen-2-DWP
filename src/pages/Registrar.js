import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Registrar = () => {
  const data = localStorage.getItem("data");
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    id: JSON.parse(data).length,
    name: "",
    lastname: "",
    age: "",
    curp: "",
    address: "",
    phone: "",
    email: "",
    height: "",
    weight: "",
    category: "",
  });

  const handleChange = (e) => {
    if(e.target.name === "category"){
      setDatos({...datos, [e.target.name]: e.target.value, id: JSON.parse(data).filter(x => x.category === e.target.value).length})
    } else{
      setDatos({...datos, [e.target.name]: e.target.value})
    }
  }

  const onSubmit = () => {
    let data2 = JSON.parse(data);
    let aux = [...data2];
    aux.push(datos);
    localStorage.setItem("data", JSON.stringify(aux));
    if(window.confirm("El paciente ha sido registrado con exito.")){
      navigate("/control-personal")
    }
  }

  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-6">
          <h2 className="text-center">Registrar Paciente/Doctor</h2>
          <div className="card-body">
            <form className="from-group">
              <div>
                <label className="form-label" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="lastname">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Apellido"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="age">
                  Edad
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="weight">
                  Peso
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  id="weight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="address">
                  Direccion
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Direccion"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Telefono"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="height">
                  Estatura
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="height"
                  id="height"
                  placeholder="Estatura"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="curp">
                  CURP
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="curp"
                  id="curp"
                  placeholder="CURP"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="categoria">
                  Categoria
                </label>
                <select
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Categoria"
                  onChange={(e) => handleChange(e)}
                >
                  <option value={"paciente"}>Paciente</option>
                  <option value={"doctor"}>Doctor</option>
                </select>
              </div>
              <div className="d-grip gap-2">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Registrar"
                  onClick={onSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
