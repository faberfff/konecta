import { Router } from 'express'
import { getEmpleados, getEmpleado, createEmpleado, updateEmpleado, update, deleteEmpleado } from '../controllers/empleados.controller.js';


const router = Router();

router.get('/employees', getEmpleados );
router.get('/employees/:id', getEmpleado );
router.post('/employees', createEmpleado);
router.put('/employees/:id', updateEmpleado );
router.patch('/employees/:id', update );
router.delete('/employees/:id', deleteEmpleado );

export default router;