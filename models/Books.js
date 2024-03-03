import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    board: {
        type: String
    },
    membersList: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true
    },
    paymentsList: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Payment',
        required: true
    }
});
export default mongoose.model("Book", BookSchema);