
export default class AuthController {
    static async login (req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }

    static async signup (req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }

    static async resetPassword (req, res, next) {
        console.log('===================================================');
        console.log(req);
        console.log('===================================================');
        return res.status(200).send({});
    }
}
