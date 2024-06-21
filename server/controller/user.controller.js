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
        res.status(201).json({ message: "User created successfully", user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        }})
    } catch (error) {
        console.log(": " + error.message);
        res.status(500).json({ message: "internal server error" })
    }
}


// ===============
// controller for the login page 
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find email id from database
        const user = await User.findOne({ email });

        if (!user) { // <-- check if user doesn't exist
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) { // <-- check if password doesn't match
            return res.status(400).json({ message: "Invalid email or password" });
        }
        else {
            res.status(200).json({
                message: "Login successfully", user: {
                    _id: user._id,
                    fullname: user.fullname, // <-- corrected typo: "function" -> "fullname"
                    email: user.email,
                }
            });

        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" }); // <-- keep this for unexpected errors
    }
}


