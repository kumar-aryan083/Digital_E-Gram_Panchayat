import express from 'express'
import { applicationStatus, applyServices, login, profile, register, searchServices } from '../controller/user.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/apply-services', applyServices);
router.get('/search-services', searchServices);
router.get('/applicatoin-status', applicationStatus);
router.get('/profile', profile);

export default router;