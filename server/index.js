import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'; 

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()
app.use(cors());

//middleware
app.use(express.json()); // Data sent from body will be passed in Json form

dotenv.config();
const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

//MongoDB connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB Connection Success');
} catch (error) {
  console.log("Error: ", error);
}


// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute) // for the signup page




app.listen(PORT, () => {
  console.log(`Server is Started Port: ${PORT}`);
});
