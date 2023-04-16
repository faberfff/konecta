import React from 'react'

const TablaEmpleados = ({empleados = []}) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Fecha de Ingreso</th>
                <th>Nombre</th>
                <th>Salario</th>

            </tr>
        </thead>
        <tbody>
            {
               empleados.map((empleado) => {
                return <tr key={empleado.id}>
                    <td>{empleado.empleado_id}</td>
                    <td>{empleado.fecha_ingreso}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.salario}</td>
                    <td>
                        <button className='btn btn-danger'>Borrar</button>
                    </td>

                </tr>
               })
            }
        </tbody>
    </table>
  );
}

export default TablaEmpleados;