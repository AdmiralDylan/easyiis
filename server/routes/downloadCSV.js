import express from "express";
import db from "../db.js";
import { createObjectCsvWriter } from "csv-writer";
const router = express.Router();

router.get('/:vaccineSite_idVaccineSite',(req,res)=>{
   console.log('ping')
    db.query('DESCRIBE generaluser',(err,rows)=>{
        if(err) return err;

        const headers = rows.map(row => ({ id: row.Field, title: row.Field }));
        console.log('ping')

        const value = [req.params.vaccineSite_idVaccineSite]
        const q = "SELECT * FROM generaluser WHERE vaccineSite_idVaccineSite=?"
        db.query(q,value,(err,data)=>{
            
            
            if(err) return res.json(err);
        
            const csvWriter = createObjectCsvWriter({
                path:'data.csv',
                header:headers
            });

            csvWriter.writeRecords(data)

            .then(() => {
          
                res.setHeader('Content-Type', 'text/csv');
                res.setHeader('Content-Disposition', 'attachment: filename="data.csv"');
                res.download('data.csv','data.csv',(err));
            })
            .catch((err) => {
            console.error('error writing', err);
            res.status(500).send('oops');
            });
        });
    });
});


export default router;