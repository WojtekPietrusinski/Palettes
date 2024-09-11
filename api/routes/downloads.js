import express from "express"
import { Download } from "../controllers/download.js"

const router = express.Router()

router.get("/get", Download)


export default router