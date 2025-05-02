import User from "../model/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({
                message: "Invalid email format"
            })
        }
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    
        if(!passwordRegex.test(password)){
            return res.status(400).json({
                message: "Invalid password format"
            })
        }
    
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            books: []
        })
    
        res.status(201).json({
            success: true,
            message: "User created successfully",    
            data: user,
            
        })  
        
    } catch (error) {
        console.log("error creating user", error.message)
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: error
        })
    }
   
}

export const login = async (req, res) => {

    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }
    
        //find user by email address
        const user = await User.findOne({email})

        //check if user exists
        if(!user){
            return res.status(400).json({
                message: "User not found"
            })
        }
    //check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({
                message: "Invalid password"
            })              
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})

    
        res.status(200).json({
            message: "Login successful",
            token,
            data: user
        })
    } catch (error) {
        console.log("error logging in", error.message)
        res.status(500).json({
            message: "Internal Server Error",
            data: error
        })
        
    }
    }

    export const getUsers = async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json({
                message: "Users fetched successfully",
                data: users
            })
        } catch (error) {
            console.log("error getting users", error)    
            res.status(500).json({
                message: "Internal Server Error",
                data: error         
            })
        }
    }

    export const getUser = async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json({
                message: "User fetched successfully",
                data: user
            })
        } catch (error) {
            console.log("error getting user", error)
            res.status(500).json({
                message: "Internal Server Error",
                data: error
            })
        }
    }

    export const deleteUser = async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message: "User deleted successfully",
                data: user
            })
        } catch (error) {
            console.log("error deleting user", error)
            res.status(500).json({
                message: "Internal Server Error",
                data: error
            })
        }
    }

    export const updateUser = async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(200).json({
                message: "User updated successfully",
                data: user
            })
        } catch (error) {
            console.log("error updating user", error)
            res.status(500).json({
                message: "Internal Server Error",
                data: error
            })
        }
    }
