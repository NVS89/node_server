
import AuthController from '../../controllers/auth/auth.controller.js';
import express from 'express';
import Validator from '../../utility/validators.js';
const router = express.Router();

router.post(
    '/login',
    Validator.validateUser([
        'login',
        'password'
    ]),
    AuthController.login
);
router.post(
    '/signup',
    Validator.validateUser([
        'email',
        'gender',
        'age',
        'password',
        'passwordConfirm',
    ]),
    AuthController.signup
);
router.post('/reset-password', AuthController.resetPassword);

export default router;