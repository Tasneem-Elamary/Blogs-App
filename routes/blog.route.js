import { Router } from 'express'
import { addblog, allblogs, deleteblog, updateblog } from '../controllers/blog.controller.js';
import { auth } from '../middleware/auth.js';

const router = Router();


 router.post("/",auth(),addblog)
router.put("/:id",auth(), updateblog)
router.delete("/:id",auth(), deleteblog)
router.get("/",auth(),allblogs)






export default router