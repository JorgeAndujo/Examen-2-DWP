import React from "react";

const ListaPaciente = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <>
      <table className="table container mt-3">
        <thead>
          <tr>
            <th colSpan="9" className="text-center">
              Lista de paciente
            </th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">CURP</th>
            <th scope="col">Edad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.filter(x => x.category === "paciente").map((x) => (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.lastname}</td>
              <td>{x.curp}</td>
              <td>{x.age}</td>
              <td>{x.address}</td>
              <td>{x.phone}</td>
              <td>{x.email}</td>
              <td>Editar Eliminar</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table container mt-3">
        <thead>
          <tr>
            <th colSpan="9" className="text-center">
              Lista de doctor
            </th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">CURP</th>
            <th scope="col">Edad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.filter(x => x.category === "doctor").map((x) => (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.lastname}</td>
              <td>{x.curp}</td>
              <td>{x.age}</td>
              <td>{x.address}</td>
              <td>{x.phone}</td>
              <td>{x.email}</td>
              <td>Editar Eliminar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListaPaciente;
