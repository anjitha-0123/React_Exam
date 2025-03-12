import React,{useState} from 'react'
import Navbar from '../component/Navbar'


function Addstudent() {
    const [studentname,SetStudentname]=useState("")
    const [enrollmentnum,setEnrollmentnum]=useState("")
    const [coursename,setCoursename]=useState("")
    const [dateofenrollment,setDateofenrollment]=useState("")

    const handleAdd=async(e)=>{
        e.preventDefault();
        try
        {
            
            const res=await fetch("/api/addstudent",{
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({StudentName: studentname,
                        EnrollmentNum: enrollmentnum,
                        CourseName: coursename,
                        DateofEnrollemnt: dateofenrollment }),
            });
            if(res.ok){
                alert("Student Profile Added Successfully");
            }
            else {
                const errorData = await res.text();
                alert("Error: " + (errorData.message || "Something went wrong"));
            }   
        }
        catch (error) {
            console.error("Error:", error);
            alert("Something went wrong: " + error.message);
        }
    }
  return (
    <div>
        <Navbar></Navbar>
        <form className='bg-green-800 text-white mt-8  ml-24 rounded-lg w-[600px] h-[700px]' onSubmit={handleAdd}>
            <h1 className='ml-40 mt-12 pt-10 font-bold'>Add Student</h1>
            <label className='mt-6'>Student Name :</label>
            <input
                type='text'
                required
                value={studentname}
                onChange={(e)=>SetStudentname(e.target.value)}
                className=' ml-4 border-2'/><br></br>
            <label>Enrollment Number :</label>
            <input
                type='text'
                required
                value={enrollmentnum}
                onChange={(e)=>setEnrollmentnum(e.target.value)}
                className='ml-4 border-2'/><br></br>
            <label>Course Name :</label>

            
            <select
                  required
                  value={coursename}
                  onChange={(e)=>setCoursename(e.target.value)}
                  className='ml-4 border-2 h-8'>
                <option value='Blockchain'>Blockchain</option>
                <option value='Cybersecurity'>Cyber Security</option>
                <option value='PCBDesigning'>PCB Designing</option>
            </select><br></br>
            <label>Date of Enrollment :</label>
             <input
                type='date'
                required
                value={dateofenrollment}
                onChange={(e)=>setDateofenrollment(e.target.value)}
                className=' ml-4 border-2'/><br></br>

            <button
                  className='bg-black p-2 rounded-lg '>
                    Add Student
            </button>
                 

        </form>
    </div>
  )
}

export default Addstudent









