import express from 'express';
import UserController from '../../controllers/users/users.controller';
import Validator from '../../middleware/validators.js';
const router = express.Router();

router.get(
    '/users',
    UserController.getUsers
);
router.get(
    '/users/:userId',
    Validator.validateMessages(['userId']),
    UserController.getUser
);
router.patch(
    '/user',
    Validator.validateMessages([
        '_id',
        'name',
        'surename',
        'email',
        'phone',
        'age',
        'gender'
    ]),
    UserController.updateUser
);
router.delete(
    '/user/:userId',
    Validator.validateMessages(['userId']),
    UserController.deleteUser
);

export default router;