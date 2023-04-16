import React from 'react'

const TablaSolicitud = ({solicitudes = []}) => {
  return (
       
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Codigo</th>
                <th>Descripción</th>
                <th>Resumen</th>
                <th>Empleado</th>
                
            </tr>
        </thead>
        <tbody>
            {
               solicitudes.map((solicitud) => {
                return <tr key={solicitud.id}>
                    <th>{solicitud.id}</th>
                    <td>{solicitud.codigo}</td>
                    <td>{solicitud.descripcion}</td>
                    <td>{solicitud.resumen}</td>
                    <td>{solicitud.empleado}</td>

                    <td>
                        <button className='btn btn-danger'>Borrar</button>
                    </td>

                </tr>
               })
            }
        </tbody>
    </table>
  )
}

export default TablaSolicitud
