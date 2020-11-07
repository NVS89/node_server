import express from 'express';
import MessagesController from '../../controllers/messages/messages.controller.js';
import Validator from '../../middleware/validators.js';
const router = express.Router();

router.get(
    '/messages',
    MessagesController.getMessages
);
router.get(
    '/message/:messageId',
    Validator.validateMessages(['messageId']),
    MessagesController.getMessage
);
router.post(
    '/message',
    Validator.validateMessages(['text', 'userId']),
    MessagesController.postMessages
);
router.patch(
    '/message',
    Validator.validateMessages(['_id', 'text']),
    MessagesController.editMessages
);
router.delete(
    '/messages/:messageId',
    Validator.validateMessages(['messageId']),
    MessagesController.deleteMessages
);

export default router;