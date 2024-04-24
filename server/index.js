import express from "express"
import cors from "cors"
import siteRouter from "./routes/siteRouters.js"
import techRouter from "./routes/techRouters.js"
import userRouter from "./routes/userRouters.js"
import vaccineRouter from "./routes/vaccineProfileRouters.js"
import loginRouter from "./routes/login.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use('/login', loginRouter)
app.use('/sites', siteRouter);
app.use('/tech', techRouter);
app.use('/generaluser', userRouter);
app.use('/vaccineProfile', vaccineRouter);



app.listen(8081, ()=>{
    console.log("Listening on 8081")
})