const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    board: {
        type: String
    },
    membersList: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required: true
    },
    paymentsList: {
        type: [paymentSchema],
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);