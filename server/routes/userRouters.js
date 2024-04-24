import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/:vaccineSite_idVaccineSite",(req,res)=>{
    
    const value = [req.params.vaccineSite_idVaccineSite]
    console.log("id site from getting users = " + value)

    const q = "SELECT * FROM generaluser WHERE vaccineSite_idVaccineSite=?"

    db.query(q,[value],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.post("/:vaccineSite_idVaccineSite",(req,res)=>{
    const q = "INSERT INTO generaluser (`dob`,`gender`,`adress`,`nameFirst`,`nameLast`,`signature`,`email`,`vaccineSite_idVaccineSite`,`vaccineSite_company_idCompany`,`administrationSite`,`doseAmount`) VALUES (?)";
    const values = [
        req.body.dob,
        req.body.gender,
        req.body.address,
        req.body.nameFirst,
        req.body.nameLast,
        req.body.signature,
        req.body.email,
        req.params.vaccineSite_idVaccineSite,
        req.body.vaccineSite_company_idCompany,
        req.body.administrationSite,
        req.body.doseAmount
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.put("/:idGeneralUser",(req,res)=>{
    console.log('query',req.params['idGeneralUser']);
    const q = "UPDATE generaluser SET `dob` =?,`gender`=?,`address`=?,`nameFirst`=?,`nameLast`=?,`signature`=?,`email`=?,`vaccineSite_idVaccineSite`=?,`vaccineSite_company_idCompany`=?,`administrationSite`=?, `doseAmount`=? WHERE idGeneralUser = ?";
    const values = [
        req.body.dob,
        req.body.gender,
        req.body.address,
        req.body.nameFirst,
        req.body.nameLast,
        req.body.signature,
        req.body.email,
        req.body.vaccineSite_idVaccineSite,
        req.body.vaccineSite_company_idCompany,
        req.body.administrationSite,
        req.body.doseAmount,
        req.params['idGeneralUser']
    ]
    console.log("values into SQL",values);
    db.query(q,values, (err,data)=>{
        if(err) return res.json(err);
        return res.json("User Update");
    });
});

router.delete("/:idGeneralUser", (req,res)=>{
    const idGeneralUser = req.params.idGeneralUser;
    const q = "DELETE FROM idGeneralUser WHERE idGeneralUser = ?";
    
    db.query(q,[idGeneralUser],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

export default router;