import userModel from "../DB/models/user.model.js"







export const userBYID = async (req, res) => {
    
    const user = await userModel.findById(req.authUser._id)

    res.json({ message: "Done", user })
}


export const updateUser = async (req, res) => {

    try {
        const { age, email } = req.body

        const user = await userModel.findByIdAndUpdate(req.authUser._id,
        {
           email, age
        }, {
        new: true
    })

    

    res.json({ message: "Done", user })
    } catch (error) {
        res.json({ message: "catch error",error })
    }
    
}


export const deleteUser = async (req, res) => {

    try {
        const user = await userModel.findOneAndDelete({ _id: req.authUser._id}) //object null
   
         res.json({ message: "Done", user })
    } catch (error) {
        res.json({ message: "catch error",error })
    }
    
}



export const allUsers = async (req, res) => {
   try {
    const userList = await userModel.find()
    res.json({ message: "Done", userList })
  
   } catch (error) {
    res.json({ message: "catch error",error })
   }
       
    
}

