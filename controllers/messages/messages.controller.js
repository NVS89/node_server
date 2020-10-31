export default class MessagesController {
    static async getMessages(req, res, next){
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async getMessage(req, res, next){
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async postMessages(req, res, next){
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async editMessages(req, res, next){
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async deleteMessages(req, res, next){
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
}
 