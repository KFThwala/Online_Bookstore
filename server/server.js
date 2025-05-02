import express from 'express';
import dotenv from "dotenv";
import connect from './config/db.js';
import bookRouter from "./router/book.router.js";
import authRouter from "./router/auth.router.js";


dotenv.config();
const PORT = 3300

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.use("/api/auth", authRouter)
app.use("/api/book", bookRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connect()
   
});