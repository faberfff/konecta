import { Router } from 'express';
import { getSolicitudes, getSolicitud, createSolicitud, updateSolicitud, update, deleteSolicitud } from '../controllers/solicitudes.cotroller.js';

const router = Router();


router.get('/solicitudes', getSolicitudes );
router.get('/solicitudes/:id', getSolicitud );
router.post('/solicitudes', createSolicitud );
router.put('/solicitudes/:id', updateSolicitud );
router.patch('/solicitudes/:id', update );
router.delete('/solicitudes/:id', deleteSolicitud );

export default router;