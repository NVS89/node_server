import Message from '../../models/mesasges.model.js';
import validatorCheckAPI from 'express-validator/check//index.js';
const {validationResult} = validatorCheckAPI;

export default class MessagesController {
    static async getMessages(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const messages = await Message.find().populate('author');
            if (Array.isArray(messages) && messages.length > 0) {
                return res.status(200).json({ status: 'getChatMessages success', messages: messages });
            } else {
                return res.status(200).json({ status: 'no message found'});
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }
    static async getMessage(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const {
                messageId
            } = req.params;

            const message = await Message.findOne({messageId}).populate('author');
            if (message) {
                return res.status(200).json({ status: 'getSingleMessage success', message: message });
            }
            else {
                return res.status(200).json({ status: 'no message found'});
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }
    static async postMessages(req, res, next){
        try {
            const {
                text,
                userId
            } = req.body;

            const message = new Message({
                text: text,
                author: userId,
            });

            const status = await message.save();

            if(status){
                return res.status(200).json({ status: 'getChatMessages success', message: status });
            } else {
                throw new Error();
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }
    static async editMessages(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }

        try {
            const {
                _id,
                text,
                userId
            } = req.body;
            const isMessagesExist = await Message.find({
                _id: _id,
                userId: userId
            });
            if(isMessagesExist){
                const updateMessagestatus = await Message.updateOne(
                    {
                        _id: _id,
                        userId: userId
                    },
                    {
                        text: text,
                    }
                );
                if(updateMessagestatus.ok === 1 && updateMessagestatus.nModified === 1){
                    return res.status(200).json({ status: 'editMessage success' });
                } else if(updateMessagestatus.ok === 1 && updateMessagestatus.nModified === 0){
                    return res.status(200).json({ status: 'message not updated' });
                } else {
                    throw new Error();
                }
            } else {
                return res.status(422).send({ errors: ['no record found'] });
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }
    static async deleteMessages(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const {
                messageId
            } = req.params;

            const isMessageExist = await Message.findById(messageId);
            if(isMessageExist){
                const deleteMessageStatus = await Message.deleteOne({_id: messageId});
                if(deleteMessageStatus){
                    return res.status(200).json({ status: 'deleteMessage success' });
                } else {
                    throw new Error();
                }
            } else {
                return res.status(422).send({ errors: ['no record found'] });
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }
}
