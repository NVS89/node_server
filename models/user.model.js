import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            minlength: 1,
            maxlength: 20
        },
        surename: {
            type: String,
            minlength: 1,
            maxlength: 20
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
            // match: Regexp for email
        },
        phone: {
            type: String,
            minlength: 5,
            maxlength: 11
        },
        age: {
            type: Number,
            max: 120,
        },
        gender: {
            type: String,
            enum: [
                'male',
                'femail'
            ]
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 20
        },
        resetToken: String,
        resetTokenExpires: Date
    },
    {
        timestamps: true
    }
);

export default mongoose.model('User', userSchema);