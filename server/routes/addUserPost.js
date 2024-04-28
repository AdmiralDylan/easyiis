import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/:siteId",(req,res)=>{
    
    const siteId = [req.params.siteId]
    const q = "SELECT * FROM site WHERE idSite=?"
    db.query(q,siteId,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.post("/:vaccineSite_idVaccineSite",(req,res)=>{
    
    const siteId = [req.params.vaccineSite_idVaccineSite]
    
    const q = "SELECT company_idCompany FROM site where idSite =?"
    
    db.query(q,siteId,(err,data)=>{
        console.log(data[0].company_idCompany)
        if(err) return res.json(err);
        
        const values = [
            req.body.dob,
            req.body.gender,
            req.body.address,
            req.body.nameFirst,
            req.body.nameLast,
            req.body.signature,
            req.body.email,
            siteId,
            data[0].company_idCompany,
            req.body.administrationSite,
            req.body.doseAmount,
            req.body.checkedIn,
            req.body.checkInTime
        ]
        const q = "INSERT INTO generaluser (`dob`,`gender`,`address`,`nameFirst`,`nameLast`,`signature`,`email`,`vaccineSite_idVaccineSite`,`vaccineSite_company_idCompany`,`administrationSite`,`doseAmount`,`checkedIn`,`checkedInTime`) VALUES (?)";

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
});


export default router;