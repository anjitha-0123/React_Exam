import {Router} from 'express';
import {student} from '../Model/student.js'

const adminroute=Router();

export{adminroute}



adminroute.post('/addstudent',async(req,res)=>{
    try
    {
      const {StudentName,EnrollmentNum,CourseName,DateofEnrollemnt}=req.body;
      console.log(StudentName);

      const existingEnrollement = await student.findOne({ enrollmentnum: EnrollmentNum });

      if(existingEnrollement){
        res.status(400).send("Student Already Enrolled")
        console.log("Student Already Enrolled");
        }
        else
        {
            const newStudent=new student({
                studentname:StudentName,
                enrollmentnum:EnrollmentNum,
                coursename:CourseName,
                dateofenrollement:DateofEnrollemnt
            })
            await newStudent.save();
            res.status(201).send('Student Enrollment Successfull')
            console.log('Student Enrollment Successfull');
        }
      
    }
    catch(error)
    {
     console.log(error);
     res.status(500).send("Internal Server Error")
    }
});
adminroute.get('/getenrollments',async(req,res)=>{
   try
   {
   
    const Details=await student.find();
    
    if(Details){
        res.status(200).json({enrollments:Details});
        console.log(Details);
    }
    else
    {
        res.status(404).send("No such Enrollemnt",enrollments)
        console.log('No such Enrollemnt');
  
    }
  
    }
    catch(error)
    {
     console.log(error);
     res.status(500).send("Internal Server Error")
    }  
});

adminroute.put('/updatestudent',async(req,res)=>{
    try
      {
        const {StudentName,EnrollmentNum,CourseName,DateofEnrollemnt}=req.body;
        console.log(StudentName);

        const result=await student.findOne({entrollmentnum:EnrollmentNum});
        console.log(result);
        if(result)
        {
            result.coursename=CourseName
            result.save();
            res.status(200).send("Updation Successfull")
            console.log("Updation Successfull");
            
        }
        else
        {
          res.status(404).send("No such Student")
        }
      }
      catch(error)
      {
       console.log(error);
       res.status(500).send("Internal Server Error")
      } 
});

adminroute.delete('/deletestudent',async(req,res)=>{
    try
    {
        const Name=req.body.EnrollmentNum;
        console.log(Name);
        
        const data=await student.findOne({entrollmentnum:Name})
        console.log(data);
        
        if(data){
            await student.findOneAndDelete(data)
            res.status(200).send('Student Details Deleted')
            console.log("Student Details Deleted");
        }
        else{
            res.status(404).send('No such Student')
            console.log("No such Student");
        }
        
    }
    catch(error)
    {
     console.log(error);
     res.status(500).send("Internal Server Error")
    } 
})