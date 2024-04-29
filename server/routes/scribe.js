import express from "express";
import db from "../db.js";
const router = express.Router();

//Update {values} on idGeneralUser

router.put("/:idGeneralUser",(req,res)=>{
    const q = "UPDATE generaluser SET `administrationSite`=?,`doseAmount`=?,`vaccineprofile_idVaccineProfile`=? WHERE `idGeneralUser` = ?"
    const values=[
        req.body.administrationSite,
        req.body.doseAmount,
        req.body.vaccineprofile_idVaccineProfile,
        req.params['idGeneralUser']
    ]


    db.query(q,values,(err,data)=>{
        if(err) return res.json(err);
        return res.json("site Update");
    });
});

export default router;
