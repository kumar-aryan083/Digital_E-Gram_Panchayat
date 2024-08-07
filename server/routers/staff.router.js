import express from 'express'
import { login, register, updateApplication } from '../controller/staff.controller.js';

const router = express.Router();

router.get('/register', register);
router.get('/login', login);
router.get('/update-application', updateApplication);

export default router;