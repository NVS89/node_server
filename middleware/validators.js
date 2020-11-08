import validatorCheckAPI from 'express-validator/check/index.js';
import { validatorConf } from '../constants/validatorConfig.js';

const { body, param } = validatorCheckAPI;

export default class Validator {
    // TODO make params more flexible/configurable (i.g. to provide different error messages)
    static validateUser(params) {
        const validators = [];
        for (const parameter of params) {
            switch (parameter) {
                case '_id':
                    validators.push(
                        param('userId').exists()
                    );
                    break;
                case 'userId':
                    validators.push(
                        body('_id')
                            .isString()
                            .trim()
                    );
                    break;
                case 'name':
                    validators.push(
                        body('name')
                            .isAlpha()
                            .withMessage('Name should be alphabetical')
                            .isLength({
                                min: validatorConf.name.min,
                                max: validatorConf.name.max
                            })
                            .withMessage('Name should include min 2 and 18 max characters')
                            .trim()
                    );
                    break;
                case 'surename':
                    validators.push(
                        body('surename')
                            .isAlpha()
                            .withMessage('Surename should be alphabetical')
                            .isLength({
                                min: validatorConf.surename.min,
                                max: validatorConf.surename.max
                            })
                            .withMessage('Name should include min 2 and 18 max characters')
                            .trim()
                    );
                    break;
                case 'login':
                    validators.push(
                        body('login')
                            .isEmail()
                            .withMessage('Please enter a valid email')
                            .normalizeEmail(),
                    );
                    break;
                case 'password':
                    validators.push(
                        body('password')
                            .isLength({
                                min: validatorConf.password.min,
                                max: validatorConf.password.max,
                            })
                            .trim(),
                    );
                    break;
                case 'phone':
                    validators.push(
                        body('phone')
                            .isLength({
                                min: validatorConf.phone.min,
                                max: validatorConf.phone.max
                            })
                            .isString()
                            .trim()
                    );
                    break;
                case 'email':
                    validators.push(
                        body('email')
                            .isEmail()
                            .withMessage('invalid email')
                            .normalizeEmail(),
                    );
                    break;
                case 'gender':
                    validators.push(
                        body('gender')
                            .isIn(validatorConf.gender),
                    );
                    break;
                case 'age':
                    validators.push(
                        body('age', 'invalid age').isInt({
                            gt: validatorConf.age.min,
                            lt: validatorConf.age.max
                        }),
                    );
                    break;
                case 'passwordConfirm':
                    validators.push(
                        body('passwordConfirm')
                            .trim()
                            .custom(
                                (value, { req }) => {
                                    if (value !== req.body.password) {
                                        throw new Error('Password have to match');
                                    }
                                    return true;
                                }
                            ),
                    );
                    break;
                default:
                    break;
            }
        }
        return validators;
    }

    static validateMessages(params) {
        const validators = [];
        for (const parameter of params) {
            switch (parameter) {
                case '_id':
                    validators.push(
                        body('_id')
                            .isString(),
                    );
                    break;
                case 'messageId':
                    validators.push(
                        param('messageId').exists()
                    );
                    break;
                case 'userId':
                    validators.push(
                        body('userId')
                            .exists()
                            .isString()
                            .trim()
                    );
                    break;
                case 'text':
                    validators.push(
                        body('text')
                            .isLength({
                                min: validatorConf.textMessage.min,
                                max: validatorConf.textMessage.max
                            })
                            .isString()
                            .trim(),
                    );
                    break;

                default:
                    break;
            }
        }
        return validators;
    }
}