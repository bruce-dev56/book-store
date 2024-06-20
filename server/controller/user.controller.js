// controller for the Signup page 
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })

        }
        const hashedPassword = await bcryptjs.hash(password, 10) // for the password hashing
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })
        await createdUser.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log(": " + error.message);
        res.status(500).json({ message: "internal server error" })
    }
}