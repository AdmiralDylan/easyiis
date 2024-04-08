import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/",(req,res)=>{
    const q = "SELECT * FROM vaccineProfile"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

router.post("/",(req,res)=>{
    const q = "INSERT INTO vaccineProfile (`cvxCode`,`lotNumber`,`expirationDate`,`vaccineName`,`visDocument`,`company_idCompany`) VALUES (?)";
    const values = [
        req.body.cvxCode,
        req.body.lotNumber,
        req.body.expirationDate,
        req.body.vaccineName,
        req.body.visDocument,
        req.body.company_idCompany
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.put("/:idVaccineProfile",(req,res)=>{
    console.log('query',req.params['idVaccineProfile']);
    const q = "UPDATE vaccineProfile SET `cvxCode` =?,`lotNumber`=?,`expirationDate`=?,`vaccineName`=?,`visDocument`=?,`company_idCompany`=? WHERE idVaccineProfile = ?";
    const values = [
        req.body.cvxCode,
        req.body.lotNumber,
        req.body.expirationDate,
        req.body.vaccineName,
        req.body.visDocument,
        req.body.company_idCompany,
        req.params['idVaccineProfile']
    ]
    console.log("values into SQL",values);
    db.query(q,values, (err,data)=>{
        if(err) return res.json(err);
        return res.json("Vaccine Profile Update");
    });
});

router.delete("/:idVaccineProfile", (req,res)=>{
    const idVaccineProfile = req.params.idVaccineProfile;
    const q = "DELETE FROM vaccineProfile WHERE idVaccineProfile = ?";
    
    db.query(q,[idVaccineProfile],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

export default router;