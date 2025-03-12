import { Schema,model } from "mongoose";
const studentSchema=new Schema({
    studentname:{type:String,required:true},
    enrollmentnum:{type:String,required:true,unique:true},
    coursename:{type:String,required:true},
    dateofenrollement:{type:String,required:true}
});
const student=model('student',studentSchema);
export {student}


