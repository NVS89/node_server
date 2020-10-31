
import AuthController from '../../controllers/auth/auth.controller.js';
import express from 'express';
const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.post('/reset-password', AuthController.resetPassword);

export default router;