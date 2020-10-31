import express from 'express';
const router = express.Router();

router.get('/users');
router.get('/users/:id');
router.post('/user');
router.patch('/user');
router.delete('/user/:id');

export default router;