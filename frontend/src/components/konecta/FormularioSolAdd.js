import React from 'react'

const FormularioSolAdd = () => {

    
    return (
        <div className="container">
          <label className="mx-1 d-grid gap-2">
            Codigo:{" "}
            <input type="text" className="form-control" autoComplete="off" />
          </label>
          <label className="mx-1 d-grid gap-2">
            Descripcion:{" "}
            <input type="text" className="form-control" autoComplete="off" />
          </label>
          <label className="mx-1 d-grid gap-2">
            Resumen:{" "}
            <input type="text" className="form-control" autoComplete="off" />
          </label>
          <label className="mx-1 d-grid gap-2">
            Empleado:{" "}
            <input type="text" className="form-control" autoComplete="off" />
          </label>
    
          <div className="mx-1 d-grid gap-2">
            <button className="btn btn-info mt-2">Crear</button>
          </div>
        </div>
      );

}

export default FormularioSolAdd