import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "../../Global";

const FormularioEmplAdd = () => {
  const url = Global.url;

  /*const [fecha_ingreso, setFecha_ingreso] = useState;
  const [nombre, setNombre] = useState;
  const [salario, setSalario] = useState;*/

  const [empleado, setEmpleado] = useState({
    fecha_ingreso: null,
    nombre: null,
    salario: null,
  });

  const [redirect, setRedirect] = useState(false);

  //Referrecias de los datos del formulario
  let fecha_ingresoRef = React.createRef();
  let nombreRef = React.createRef();
  let salarioRef = React.createRef();

  const changeState = () => {
    setEmpleado({
      fecha_ingreso: fecha_ingresoRef.current.value,
      nombre: nombreRef.current.value,
      salario: nombreRef.current.value,
    });

    console.log(empleado);
  };

  const sendData = (e) => {

    e.preventDefault();
    changeState();

    axios.post(url + 'employees', empleado).then(res => {
      setRedirect(true);
      console.log(res.data);
    })
  }

  if(redirect) {
    return <Navigate to="empleado" />
  }

  //formulario de crear empleado
  return (
    <div id="formulario">
      <form onSubmit={sendData}>
        <div className="container">
          <label className="mx-1 d-grid gap-2">
            Fecha de Ingreso:{" "}
            <input
              name="fecha_ingreso"
              type="text"
              className="form-control"
              autoComplete="off"
              ref={fecha_ingresoRef}
              onChange={changeState}
            />
          </label>
          <label className="mx-1 d-grid gap-2">
            Nombre:{" "}
            <input
              name="nombre"
              type="text"
              className="form-control"
              autoComplete="off"
              ref={nombreRef}
              onChange={changeState}
            />
          </label>
          <label className="mx-1 d-grid gap-2">
            Salario:{" "}
            <input
              name="salario"
              type="text"
              className="form-control"
              autoComplete="off"
              ref={salarioRef}
              onChange={changeState}
            />
          </label>

          <div className="mx-1 d-grid gap-2">
            <input
              className="form-control btn btn-primary"
              type="submit"
              id="publish"
              value="Crear"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioEmplAdd;
