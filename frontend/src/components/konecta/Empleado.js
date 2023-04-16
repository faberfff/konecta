import React from 'react';

const Empleado = ( {id, empleadoData, delEmpleado} ) => {

  const { fecha_ingreso, nombre, salario } = empleadoData;

  //formatear la fecha
  const format = (fecha_ingreso) => {
    return fecha_ingreso.substring(8, 10) + fecha_ingreso.substring(4, 8) + fecha_ingreso.substring(0, 4);
  }

  const del = () => {
    delEmpleado(id);
  }
  
  return (
    <div className='col'>
        <div className='card mx-auto mb-3'>
           <div className='card-header'>
              <h3 className='card-title'>{nombre}</h3>
           </div>
            <div className='card-body'>
                <label className='card-text text-start'>{salario}</label>
            </div>
            <ul className='list-group list-group-flush'>
               <li className='list-pub list-group-item'> La fecha de Ingreso es: {format(fecha_ingreso)}</li>
            </ul>
        </div>

        <div className='card-footer'>
             <button className='btn btn-danger btn-sm' type="button" onClick={del}>Borrar</button>
        </div>
        
    </div>
  );
}

export default Empleado