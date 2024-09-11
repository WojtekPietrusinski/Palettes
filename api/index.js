import express from "express";
import palletRoutes from "./routes/pallets.js"
import uploadRoutes from "./routes/uploads.js"
import downloadRoutes from "./routes/downloads.js"
import cors from "cors"


const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use(express.json())
app.use("/api/pallets", palletRoutes)
app.use("/api/uploads", uploadRoutes)
app.use("/api/downloads", downloadRoutes)




app.listen(8800,() => {
    console.log("conected!")
})