import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/:id",(req,res)=>{
    const id = req.params.id;
    const q = "SELECT visDocument FROM vaccineprofile where idVaccineProfile = ?"

    db.query(q,id,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

export default router