const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
    fullName: {
        type:String,
        required:true
    },  
    email:  {
        type:String,
        required:true
    },  
    phone:  {
        type:String,
    },  
    employeeId:  {
        type:String,
        required:true
    },  
    department:  {
        type:String,
        required:true
    },  
    designation:  {
        type:String,
        required:true
    },  
    salary:  {
        type:Number,
    },  
    joiningDate:  {
        type:Date,
    },  
    status:{
        type:Boolean
    },  
    address:  {
        type:String,
    },
},{timestamps:true})

const EmployeeModel = mongoose.model('employee',EmployeeSchema);
module.exports = EmployeeModel;