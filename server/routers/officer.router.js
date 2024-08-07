import express from 'express'
import { register, login, createServices, updateServices, deleteServices, updateApplication } from '../controller/officer.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/create-services', createServices);
router.put('/update-services', updateServices);
router.delete('/delete-services', deleteServices);
router.put('/update-application', updateApplication);

export default router;