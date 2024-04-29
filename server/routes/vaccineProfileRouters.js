import express from "express";
import db from "../db.js";
const router = express.Router()



router.get("/:company_idCompany",(req,res)=>{
    const value = req.params.company_idCompany
    const q = "SELECT * FROM vaccineprofile WHERE company_idCompany=?"

    db.query(q,value,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

router.post("/",(req,res)=>{
    const q = "INSERT INTO vaccineprofile (`cvxCode`,`lotNumber`,`expirationDate`,`vaccineName`,`visDocument`,`company_idCompany`) VALUES (?)";
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
    const q = "UPDATE vaccineprofile SET `cvxCode` =?,`lotNumber`=?,`expirationDate`=?,`vaccineName`=?,`visDocument`=?,`company_idCompany`=? WHERE idVaccineProfile = ?";
    const values = [
        req.body.cvxCode,
        req.body.lotNumber,
        req.body.expirationDate,
        req.body.vaccineName,
        req.body.visDocument,
        req.body.company_idCompany,
        req.params['idVaccineProfile']
    ]
    db.query(q,values, (err,data)=>{
        if(err) return res.json(err);
        return res.json("Vaccine Profile Update");
    });
});

router.delete("/:idVaccineProfile", (req,res)=>{
    const idVaccineProfile = req.params.idVaccineProfile;
    const q = "DELETE FROM vaccineprofile WHERE idVaccineProfile = ?";
    
    db.query(q,[idVaccineProfile],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

export default router;