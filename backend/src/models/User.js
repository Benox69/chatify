import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
        unique: false,
    },
    password:{
        type: String,
        required: true,
        unique: false,
        minlength:6
    },
    profilePic: {
        type: String,
        default: "",
    },
},
{timestamps: true} // createdAt & updatedAt
);

const User = mongoose.model("User", userSchema);

export default User;