import React from 'react'
import Header from '../ui/Header'
import TablaEmpleados from '../ui/TablaEmpleados'
import FormularioEmplAdd from './FormularioEmplAdd'
import ListEmpleados from './ListEmpleados'

const EmpleadoScreen = () => {

  return (
    <div className='container mt-3'>
     <Header />
     <FormularioEmplAdd />
     <TablaEmpleados />
     <ListEmpleados />
  
    </div>
  )
}

export default EmpleadoScreen

