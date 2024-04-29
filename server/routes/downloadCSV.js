import express from "express";
import db from "../db.js";
import { createObjectCsvWriter } from "csv-writer";
const router = express.Router();

//First get the row headers
router.get('/:vaccineSite_idVaccineSite',(req,res)=>{
    db.query('DESCRIBE generaluser',(err,rows)=>{
        if(err) return err;

        const headers = rows.map(row => ({ id: row.Field, title: row.Field }));
        const value = [req.params.vaccineSite_idVaccineSite]
        const q = "SELECT * FROM generaluser WHERE vaccineSite_idVaccineSite=?"
        //Now get the data from general user
        db.query(q,value,(err,data)=>{
            
            
            if(err) return res.json(err);
        
            //create the CSV file with the headers from earlier
            const csvWriter = createObjectCsvWriter({
                path:'data.csv',
                header:headers
            });

            csvWriter.writeRecords(data)
            //after succsfully creating the file with data from previous query set the response headers so that
            //user can download file
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