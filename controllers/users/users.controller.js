export default class UserController {
    static async getUsers(req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async getUser(req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async createUser(req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async updateUser(req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
    static async deleteUser(req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
}
