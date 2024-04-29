import express from "express";
import db from "../db.js";
const router = express.Router();


//Update checkedIn, checkInTime, on idGeneralUser

router.put("/:idGeneralUser",(req,res)=>{
    const q = "UPDATE generaluser SET `checkedIn`=?,`checkedInTime`=? WHERE `idGeneralUser` = ?"
    const values=[
        req.body.checkedIn,
        req.body.checkedInTime,
        req.params['idGeneralUser']
    ]


    db.query(q,values,(err,data)=>{
        if(err) return res.json(err);
        return res.json("site Update");
    });
});

export default router;
