import express from "express";
import db from "../db.js";
const router = express.Router();


//get vaccines by company throught site id
router.get("/:siteId",(req,res)=>{
    const siteId = req.params.siteId
    const q = "SELECT company_idCompany FROM site WHERE idSite = ?"

    db.query(q,siteId,(err,company)=>{
        if(err) return res.json(err)
            const q = "SELECT * FROM vaccineprofile WHERE company_idCompany=?"
            const value = company[0].company_idCompany
            db.query(q,value,(err,data)=>{
            if(err) return res.json(err)
            return res.json(data)
        });
    });

});


export default router;