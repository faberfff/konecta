import React from 'react'

import { NavLink  } from 'react-router-dom';
import EmpleadoScreen from '../konecta/EmpleadoScreen';
import SolicitudScreen from '../konecta/SolicitudScreen';


const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mx-1">
        <div className="container-fluid">
            <h1 className='navbar-brand'>konecta</h1>
        </div>

        <div className="collapse navbar-collapse" id='navbarvar'>

            <ul className='navbar-nav'>
               <li className='nav-item active'>
                  <NavLink to={EmpleadoScreen} className="nav-link">Empleados <span className='sr-only'></span></NavLink>
                  
               </li>

               <li className='nav-item active'>
                  <NavLink to={SolicitudScreen} className="nav-link">Solicitud <span className='sr-only'></span></NavLink>
                  
               </li>

            </ul>

        </div>

    </nav>
  )
}

export default Header;

