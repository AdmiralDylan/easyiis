import express from "express"
import cors from "cors"
import siteRouter from "./routes/siteRouters.js"
import techRouter from "./routes/techRouters.js"
import userRouter from "./routes/userRouters.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use('/sites', siteRouter);
app.use('/tech', techRouter);
app.use('/generaluser', userRouter);


app.listen(8081, ()=>{
    console.log("Listening on 8081")
})