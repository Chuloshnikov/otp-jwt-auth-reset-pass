import mongoose, { Schema } from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username already exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [true, "Email already exists"],
    },
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: Number},
    address: {type: String},
    profilePic: {type: String},
}, { timestamps: true });


export default mongoose.model.Users || mongoose.model("User", UserSchema);