import express from "express"
import cors from "cors"
import siteRouter from "./routes/siteRouters.js"
import techRouter from "./routes/techRouters.js"
import userRouter from "./routes/userRouters.js"
import vaccineRouter from "./routes/vaccineProfileRouters.js"
import loginRouter from "./routes/login.js"
import checkInRouter from "./routes/checkIn.js"
import scribeRouter from "./routes/scribe.js"
import downloadCSVRouter from "./routes/downloadCSV.js"
import addUserPostRouter from "./routes/addUserPost.js"
import showVaccinesToUserRouter from "./routes/showVaccinesToUser.js"
import getVisDocumentRouter from "./routes/getVisDocument.js"
import getCompanyRouter from "./routes/getCompany.js"
import getSite from "./routes/getSite.js"

//paths to routers 
//i'm not sure if this is the best way, but it's working for me at the moment
const app = express()

app.use(express.json())
app.use(cors())

app.use('/getSite',getSite);
app.use('/getCompany',getCompanyRouter);
app.use('/getvis',getVisDocumentRouter);
app.use('/vaccines',showVaccinesToUserRouter);
app.use('/addUserPost',addUserPostRouter);
app.use('/downloadCSV',downloadCSVRouter);
app.use('/scribe',scribeRouter);
app.use('/checkIn',checkInRouter);
app.use('/login', loginRouter);
app.use('/sites', siteRouter);
app.use('/tech', techRouter);
app.use('/generaluser', userRouter);
app.use('/vaccineProfile', vaccineRouter);


//All listening here
app.listen(8081, ()=>{
    console.log("Listening on 8081")
})