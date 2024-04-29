import express from "express";
import db from "../db.js";
const router = express.Router();

//get company by companyid
router.get('/:idCompany',(req,res)=>{
    console.log(req.params.idCompany)
    const q = "SELECT nameCompany FROM company WHERE idCompany = ? "

    db.query(q,req.params.idCompany,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

export default router;