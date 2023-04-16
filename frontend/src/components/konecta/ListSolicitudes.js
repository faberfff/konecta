import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Global from '../../Global';

const ListSolicitudes = () => {
  const url = Global.url;
  const [solicitudes, setSolicitudes] = useState([])
  useEffect( () => {
      getSolicitudes()
  },[])

  //PROCEDIMIENTO PARA MOSTRAR

  const getSolicitudes = async () => {
      const res = await axios.get(url + 'solicitudes')
      setSolicitudes(res.data)
  }

  return(
      <div className="container">
          <div className="row"><h1>Lista Solicitudes</h1></div>
          <table className="table table-striped table-bordered">
              <thead className="table table-striped table-hover">
                  <tr>
                      <th>Id </th>
                      <th>Codigo</th>
                      <th>Descripción</th>
                      <th>Resumen</th>
                      <th>Empleado</th>
                      


                  </tr>
              </thead>
              <tbody>
                  { solicitudes.map ( (solicitud) => (
                      <tr key={ solicitud.id}>
                          <td> {solicitud.solicitud_id} </td>
                          <td> {solicitud.codigo} </td>
                          <td> {solicitud.descripcion} </td>
                          <td> {solicitud.resumen} </td>
                          <td> {solicitud.empleado_id} </td>

                      </tr>
                  ))}
              </tbody>
          </table>
          <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
      </div>
  )
}

export default ListSolicitudes;

