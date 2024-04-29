import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/:company_idCompany",(req,res)=>{
    const value = [req.params.company_idCompany]
    //console.log("companyId req from site router, router get ",value)


    const q = "SELECT * FROM site WHERE company_idCompany =?"
    //console.log("companyId from site router, router get",value)
    db.query(q,value,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

router.post("/",(req,res)=>{
    const q = "INSERT INTO site (`siteName`,`siteDescription`,`operationDate`,`operationTimeStart`,`operationTimeEnd`,`timeInterval`,`siteAddress`,`company_idCompany`) VALUES (?)";
    const values = [
        req.body.siteName,
        req.body.siteDescription,
        req.body.operationDate,
        req.body.operationTimeStart,
        req.body.operationTimeEnd,
        req.body.timeInterval,
        req.body.siteAddress,
        req.body.company_idCompany,
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.put("/:idSite",(req,res)=>{
    const q = "UPDATE site SET `siteName` =?,`siteDescription`=?,`operationDate`=?,`operationTimeStart`=?,`operationTimeEnd`=?,`timeInterval`=?,`siteAddress`=?,`company_idCompany`=? WHERE idSite = ?";
    const values = [
        req.body.siteName,
        req.body.siteDescription,
        req.body.operationDate,
        req.body.operationTimeStart,
        req.body.operationTimeEnd,
        req.body.timeInterval,
        req.body.siteAddress,
        req.body.company_idCompany,
        req.params['idSite'],
    ]
    console.log("values into SQL",values);
    db.query(q,values, (err,data)=>{
        console.log(err,data)
        if(err) return res.json(err);
        return res.json("site Update");
    });
});

router.delete("/:idSite", (req,res)=>{
    const idSite = req.params.idSite;
    console.log("delete ",idSite)
    const q = "DELETE FROM site WHERE idSite = ?";
    
    db.query(q,idSite,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

export default router;