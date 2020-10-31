import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 500
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Message', messageSchema);