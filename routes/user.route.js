import { Router } from 'express'
 import { deleteUser, updateUser, userBYID ,allUsers
} from '../controllers/user.controller.js';
import { auth } from '../middleware/auth.js';
const router = Router();




router.get("/",auth(), allUsers)

router.get("/profile",auth(), userBYID)

router.put("/",auth(), updateUser)

router.delete("/",auth(), deleteUser)






export default router