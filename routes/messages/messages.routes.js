import express from 'express';
import MessagesController from '../../controllers/messages/messages.controller.js';
const router = express.Router();

router.get('/messages', MessagesController.getMessages);
router.get('/message/:messageId', MessagesController.getMessage);
router.post('/message', MessagesController.postMessages);
router.patch('/message', MessagesController.editMessages);
router.delete('/messages/:messageId', MessagesController.deleteMessages);

export default router;