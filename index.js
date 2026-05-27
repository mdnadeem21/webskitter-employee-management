require('dotenv').config()


const express=require('express');
const connectDB = require('./app/config/db');
const EmployeeRoutes = require('./app/routes/empRoutes');

const app=express();
// Routes


// DB configure
connectDB();

// middleware 
app.use(express.json());


app.get('/',(req,res) => {
    res.send(`<h1>Welcome to the employee management app</h1>`)
})

app.use('/api/v1/emps',EmployeeRoutes)

const PORT = process.env.PORT
app.listen(PORT,(error)=>{
    if(error){
        console.log(`Error in PORT Listening : ${error.message}`);
    }else{
        console.log("server is running on port ",`http://localhost:${PORT}`);
    }
})

