import express from "express";
import db from "../db.js";
const router = express.Router();
//get site from siteId
//redundant after login router
router.get('/:idSite',(req,res)=>{
    const q = "SELECT * FROM site WHERE idSite = ? "

    db.query(q,req.params.idSite,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

export default router;