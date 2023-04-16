import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
     
import EmpleadoScreen from "../components/konecta/EmpleadoScreen";
import KonectaScreen from "../components/konecta/KonectaScreen";
import ListEmpleados from "../components/konecta/ListEmpleados";
import ListSolicitudes from "../components/konecta/ListSolicitudes";
import SolicitudScreen from "../components/konecta/SolicitudScreen";

export const AppRouter = () => {
  return (
    
    <BrowserRouter>
         <Routes>
             <Route path="/listEmpleados" element={<ListEmpleados />} exact /> 
             <Route path="/listSolicitud" element={<ListSolicitudes />} exact /> 
             <Route path="/solicitud" element={<SolicitudScreen />} exact /> 
             <Route path="/empleado" element={<EmpleadoScreen />} exact />  

             <Route path="/" element={<KonectaScreen />} exact />  
           
         </Routes>  
     </BrowserRouter> 
    
  );
};
