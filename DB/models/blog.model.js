import mongoose from 'mongoose'
const blogSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    price: {
        type: Number,
        required: true,
        
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    
    
}, {
    timestamps: true
})

const blogModel = mongoose.model('Blog', blogSchema)
export default blogModel