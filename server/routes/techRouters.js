import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/",(req,res)=>{
    const q = "SELECT * FROM tech"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


router.post("/",(req,res)=>{
    const q = "INSERT INTO tech (`password`,`username`,`isAdmin`,`nameFirst`,`nameLast`,`signature`,`email`,`company_idCompany`) VALUES (?)";
    const values = [
        req.body.password,
        req.body.username,
        req.body.isAdmin,
        req.body.nameFirst,
        req.body.nameLast,
        req.body.signature,
        req.body.email,
        req.body.company_idCompany,
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.put("/:idTech",(req,res)=>{
    console.log('query',req.params['idTech']);
    const q = "UPDATE tech SET `password` =?,`username`=?,`isAdmin`=?,`nameFirst`=?,`nameLast`=?,`signature`=?,`email`=?,`company_idCompany`=? WHERE idTech = ?";
    const values = [
        req.body.password,
        req.body.username,
        req.body.isAdmin,
        req.body.nameFirst,
        req.body.nameLast,
        req.body.signature,
        req.body.email,
        req.body.company_idCompany,
        req.params['idTech'],
    ]
    console.log("values into SQL",values);
    db.query(q,values, (err,data)=>{
        if(err) return res.json(err);
        return res.json("Tech Update");
    });
});

router.delete("/:idTech", (req,res)=>{
    const idTech = req.params.idTech;
    const q = "DELETE FROM idTech WHERE idTech = ?";
    
    db.query(q,[idTech],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


router.post("/",(req,res)=>{
    const {password} = req.body;
    const {username} = req.body;
    
    const q = "SELECT password,username FROM tech WHERE username = ?"



    db.query(q,[username],(err,data)=>{

        console.log(data[0]);

        if(!data[0]){
            return res.status(404).json({message: "User not found"})
        }

        const dbUsername = data[0].username;
        const dbPassword = data[0].password;

        if(err) return res.json(err)
        
        if(password === dbPassword && username === dbUsername){
            return res.status(200).json({message:'success'});
        } else {
            return res.status(403).json({message: "Wrong pass"})
        }

        
    })
});




export default router;