import express from "express"
import { addPalette } from "../controllers/palette.js"

const router = express.Router()

router.post("/test", addPalette)

router.get("/", (req,res) => {
    res.json("Bopbopskibidibop")
})

export default router