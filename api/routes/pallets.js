import express from "express"
import { addPallet } from "../controllers/pallet.js"

const router = express.Router()

router.post("/test", addPallet)


export default router