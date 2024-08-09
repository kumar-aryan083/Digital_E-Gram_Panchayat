import express from 'express'
import { register, login, newServices, updateServices, deleteServices, updateApplication } from '../controller/officer.controller.js';
import { middleware } from '../middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/new-services', middleware, newServices);
router.put('/update-services', updateServices);
router.delete('/delete-services', deleteServices);
router.put('/update-application', updateApplication);

export default router;