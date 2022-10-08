import userModel from "../DB/models/user.model.js"
import jwt from'jsonwebtoken'


export const auth=()=>{
   
    return async(req,res,next)=>{
    try {
    const {authtoken}=req.headers
    console.log({authtoken});
    if (!authtoken.startsWith(process.env.BearerKey)) {
        res.json({ message: "Inavlid Bearer Key" })
    } else {
        const token = authtoken.split(" ")[1]
    const decoded = jwt.verify(token, process.env.tokenSignature)
    if(decoded&&decoded.id){
        const tokenUser=await userModel.findById(decoded.id).select("_id firstName email")
       if(tokenUser) {
        
        req.authUser = tokenUser  
        next()
    }
        else{
            res.json({message:"invalid-signin"})
        }
    }else{
        res.json({message:"invalid pyload token"})
    }
    }}

         catch (error) {
            res.json({message:"catch error",error})
        }
}}