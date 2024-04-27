import express from "express";
import db from "../db.js";
const router = express.Router();

//Update {values} on idGeneralUser

router.put("/:idGeneralUser",(req,res)=>{
    const q = "UPDATE generaluser SET `administrationSite`=?,`doseAmount`=? WHERE `idGeneralUser` = ?"
    const values=[
        req.body.administrationSite,
        req.body.doseAmount,
        req.params['idGeneralUser']
    ]

    console.log(values)

    db.query(q,values,(err,data)=>{
        if(err) return res.json(err);
        return res.json("site Update");
    });
});

export default router;
