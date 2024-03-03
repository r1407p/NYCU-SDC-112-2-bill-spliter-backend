import mongoose from 'mongoose';
const PaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paidBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sharedBy: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Payment", PaymentSchema);