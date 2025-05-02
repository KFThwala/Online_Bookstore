import express from 'express';
import { createBook, getAllBooks, getUserBooks, getSingleBook, deleteBook } from '../controllers/book.controller.js';
import upload from '../config/multer.js';

const router = express.Router()

router.post("/createBook/:id",upload, createBook)
router.get("/getBooks", getAllBooks)
router.get("/getBooks/:id", getUserBooks)
router.get("/getSingleBook/:id", getSingleBook)
router.delete("/deleteBook/:id/:bookId", deleteBook)

export default router
