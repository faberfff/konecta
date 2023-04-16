import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Global from '../../Global';

const ListEmpleados = () => {
  const url = Global.url;
  const [empleados, setEmpleado] = useState([])
  useEffect( () => {
      getEmpleados()
  },[])

  //PROCEDIMIENTO PARA MOSTRAR

  const getEmpleados = async () => {
      const res = await axios.get(url + 'employees')
      setEmpleado(res.data)
  }

  return(
      <div className="container">
          <div className="row"><h1>Lista de empleados</h1></div>
          <table className="table table-striped table-bordered">
              <thead className="table table-striped table-hover">
                  <tr>
                      <th>Id</th>
                      <th>Fecha Ingreso</th>
                      <th>Nombre</th>
                      <th>Salario</th>
                  </tr>
              </thead>
              <tbody>
                  { empleados.map ( (empleado) => (
                      <tr key={ empleado.id}>
                          <td> {empleado.empleado_id} </td>
                          <td> {empleado.fecha_ingreso} </td>
                          <td> {empleado.nombre} </td>
                          <td> {empleado.salario} </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
      </div>
  )
}

export default ListEmpleados
