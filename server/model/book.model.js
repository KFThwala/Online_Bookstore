import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: {
        type: String,
    },
    coverId: {
        type: String
    },
    publicationYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
    },
    summary: {
        type: String,
        required: true
    },
    ISBN: String,
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }


},{
    timestamps: true,
})

const Book = mongoose.model('Book', bookSchema);

export default Book