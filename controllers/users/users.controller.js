import User from '../../models/user.model.js';
import validatorCheckAPI from 'express-validator/check//index.js';
const {validationResult} = validatorCheckAPI;

export default class UserController {
    static async getUsers(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const users = await User.find();
            if (users) {
                const response = users.map((user) => {
                    return {
                        name: user.name,
                        surename: user.surename,
                        email: user.email,
                        age: user.age,
                        gender: user.gender,
                    };
                });
                return res.status(200).json({ status: 'getPosts success', users: response });
            } else {
                return res.status(200).json({ status: 'no users found' });
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }

    static async getUser(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            if (user) {
                const response = {
                    name: user.name,
                    surename: user.surename,
                    email: user.email,
                    age: user.age,
                    gender: user.gender,
                }
                return res.status(200).json({ status: 'getPosts success', user: response });
            } else {
                return res.status(200).json({ status: 'no users found' });
            }
        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }

    static async updateUser(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const {
                _id,
                name,
                surename,
                email,
                phone,
                age,
                gender,
            } = req.body;

            const isUserExist = await User.findById(_id);

            if (isUserExist) {
                const userUpdateStatus = await User.updateOne(
                    { _id: _id },
                    {
                        name: name,
                        surename: surename,
                        email: email,
                        phone: phone,
                        age: age,
                        gender: gender,
                    }
                );

                if (userUpdateStatus.ok === 1 && userUpdateStatus.nModified === 1) {
                    return res.status(200).json({ status: 'editMessage success' });
                } else if (userUpdateStatus.ok === 1 && userUpdateStatus.nModified === 0) {
                    return res.status(200).json({ status: 'post not updated' });
                } else {
                    throw new Error();
                }
            } else {
                return res.status(422).send({ errors: errors.array() });
            }

        } catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            next(error);
        }
    }
    static async deleteUser(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            if (user) {
                const deleteUserStatus = await User.deleteOne({ _id: userId });
                if (deleteUserStatus) {
                    return res.status(200).json({ status: 'delete user success' });
                } else {
                    throw new Error();
                }
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
}
