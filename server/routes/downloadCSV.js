import express from "express";
import db from "../db.js";
import { createObjectCsvWriter } from "csv-writer";
const router = express.Router();

//First get the row headers
router.get('/:vaccineSite_idVaccineSite',(req,res)=>{
    db.query('DESCRIBE generaluser',(err,rows)=>{
        if(err) return err;

        //rows.map(row => ({ id: row.Field, title: row.Field }));
        let headers = null;

        headers = [
            {id:'nameFirst',title:'NAMEFIRST'},
            {id:'nameLast',title:'NAMELAST'},
            {id:'dob',tite:'DOB'},
            {id:'gender',title:'GENDER'},
            {id:'address', title:'ADDRESS'},
            {id:'administrationSite',title:'ADMINISTRATIONSITE'},
            {id:'doseAmount',title:'DOSEAMOUNT'},
            {id:'cvxCode',title:'CVXCODE'},
            {id:'lotNumber',title:'LOTNUMBER'},
            {id:'expirationDate',title:'EXPIRATIONDATE'}
        ]
        const value = [req.params.vaccineSite_idVaccineSite]
        const q = "SELECT generaluser.nameFirst,generaluser.nameLast,generaluser.dob,generaluser.gender,generaluser.address,generaluser.administrationSite,generaluser.doseAmount,vaccineprofile.cvxCode,vaccineprofile.lotNumber,vaccineprofile.expirationDate"
        + " FROM generaluser"
        + " INNER JOIN vaccineprofile ON generaluser.vaccineprofile_idVaccineProfile=vaccineprofile.idVaccineProfile"
        + " WHERE generaluser.checkedIn=1 AND generaluser.vaccineSite_idVaccineSite=?";
        //Now get the data from general user joined through vaccine profile
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