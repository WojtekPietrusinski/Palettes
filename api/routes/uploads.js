import express from "express"
import { addUpload } from "../controllers/upload.js"

const router = express.Router()

router.post("/test", addUpload)


export default router