import blogModel from "../DB/models/blog.model.js"

export const addblog=async(req,res)=>{
    try {
        const{title,description,price}=req.body
        const newblog= new blogModel ({title,description,price,userId:req.authUser._id})
        const savedblog = await newblog.save()
        res.json({message:"done",savedblog})
    } catch (error) {
        res.json({ message: "catch error",error })
    }

}
export const updateblog=async(req,res)=>{
    try {
        const {id}=req.params
        const{description,price}=req.body
        const updatedblog= await blogModel.findOneAndUpdate ({_id:id,userId:req.authUser._id},{description,price})
       
        res.json({message:"done",updatedblog})
    } catch (error) {
        res.json({ message: "catch error",error })
    }

}

export const deleteblog=async(req,res)=>{
    try {
        const {id}=req.params
        
        const deletedblog= await blogModel.deleteOne ({_id:id,userId:req.authUser._id})
       
        res.json({message:"done",deletedblog})
    } catch (error) {
        res.json({ message: "catch error",error })
    }

}

export const allblogs=async(req,res)=>{
    try {
        
        
        const blogs= await blogModel.find ({}).populate([
            {
                path: "userId",
                select: "-_id email firstName lastName"
            }
        ])
       
        res.json({message:"done",blogs})
    } catch (error) {
        res.json({ message: "catch error",error })
    }

}