import express from 'express'
import { login, register, updateApplication } from '../controller/staff.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/update-application', updateApplication);

export default router;