import mongoose from "mongoose"
import cloudinary from "../config/cloudinary.js"
import Books from "../model/book.model.js"
import User from "../model/user.model.js"

export const createBook =async  (req, res) => {
    try {
        const {title, author, genre,  publicationYear, summary,category} = req.body

        const randomNumber = Math.floor(Math.random() * 100000)
        const coverImage = await cloudinary.uploader.upload(req.file.path)
        const getUser = await User.findById(req.params.id)

        const newBook = await new Books({
            title,
            author,
            genre,
            publicationYear,
            summary,
            category,
            available : true,
            cover: coverImage.secure_url,
            coverId: coverImage.public_id,
            ISBN: `BOOK-${randomNumber}`,
          
        })

        newBook.users = getUser
        await newBook.save()
        
        getUser.books.push(new mongoose.Types.ObjectId(newBook._id))
        await getUser.save()

        res.status(201).json({
            message: "Book created successfully",
            data: newBook
        })
    } catch (error) {
        console.log("error creating a book", error)
        res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find()
        res.status(200).json({
            message: "Books fetched successfully",
            data: books
        })

        
    } catch (error) {
        console.log("error getting books", error)
        return res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
    }
}

export const getUserBooks = async (req, res) => {
    try {
        const getUser = await User.findById(req.params.id).populate("books")
        res.status(200).json({
            success: true,
            message: "User Books fetched successfully",
            data: getUser
        })
    } catch (error) {
        console.log("error getting book", error)
        return res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
    }
}

export const getSingleBook = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        res.status(200).json({
            message: "Book fetched successfully",
            data: book
        })
    } catch (error) {
        console.log("error getting book", error)
        return res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const getUser = await User.findById(req.params.id)
        const book = await Books.findById(req.params.bookId)
        getUser.books.pull(book._id)
        await getUser.save()
        await book.remove()
        res.status(200).json({
            message: "Book deleted successfully",
            data: book 
        })
    } catch (error) {
        console.log("error deleting book", error)
        return res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
    }
}