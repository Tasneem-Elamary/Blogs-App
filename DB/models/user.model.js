import mongoose from 'mongoose'
const userSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
   confirmEmail: {
        type: Boolean,
        default: false
    },
    
}, {
    timestamps: true
},{ strict: false })

const userModel = mongoose.model('User', userSchema)
export default userModel