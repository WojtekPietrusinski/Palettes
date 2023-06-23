import express from "express";
import paletteRoutes from "./routes/palettes.js"

const app = express()

app.use(express.json())

app.use("/api/palettes", paletteRoutes)




app.listen(8800,() => {
    console.log("conected!")
})