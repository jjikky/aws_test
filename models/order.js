import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    fileUrl: {
        type: String
    },
    title: {
        type: String,
        required: "Tilte is required"
    },
    description: {
        type: String,
        required: "Description is required"
    },
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        required: "Category is required"
    },
    location: [
        {
            latitude: Number,
            longitude: Number
        }
    ],
    time: [
        {
            date: String,
            hour: String
        }
    ],
    status: {
        type: String,
        default: "진행중"
    },
    reward: {
        type: Number,
        required: "Description is required"
    }
});

const model = mongoose.model("Order", OrderSchema);
export default model;