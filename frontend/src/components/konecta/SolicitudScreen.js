import React from 'react'
import Header from '../ui/Header';
import TablaSolicitud from '../ui/TablaSolicitud';
import FormularioSolAdd from './FormularioSolAdd';

const SolicitudScreen = () => {
  
  
    return (
      <div className='container mt-3'>
      <Header />
      <FormularioSolAdd />
      <TablaSolicitud />
   
     </div>
    );
}

export default SolicitudScreen
