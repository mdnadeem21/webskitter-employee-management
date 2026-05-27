const Emp = require('../../app/models/empModel')

class EmpController{
    async createEmployee(req,res){
        try {
            const {
                fullName,
                email,
                phone,
                employeeId,
                department,
                designation,
                salary,
                joiningDate,
                status,
                address
            } = req.body

            if((!fullName || !email || !employeeId)){
                return res.status(400)
                            .json({
                                status:false,
                                message:"Please fill all required field"
                            })
            }
            const emp = new Emp({
                fullName,
                email,
                phone,
                employeeId,
                department,
                designation,
                salary,
                joiningDate,
                status,
                address
            })

            const data = await emp.save();
            return res.status(201).json({
                status:true,
                message:"Employee created successfully",
                data:data
            })
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:"something went wrong in emp creation",
                error:error.message
            })
        }
    }

    async getEmployee(req,res){
        try {
            const emps = await Emp.find();

            return res.status(200)
                        .json({
                            status:true,
                            total:emps.length,
                            message:"Employees fetched successfully",
                            data:emps
                        })
        } catch (error) {
            return res.status(500)
                        .json({
                            status:false,
                            message:"Something went wrong in get employee",
                            error:error.message
                        })
        }
    }

    async getEmpById(req,res){
        try {
            const id  = req.params.id;
            const emp = await Emp.findById(id);

            if(!emp){
                return res.status(404)
                            .json({
                                status:false,
                                message:"Employee not found"
                            })
            }
            return res.status(200)
                        .json({
                            status:true,
                            data:emp
                        })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "something went wrong in get emp by Id",
                error: error.message,
              });
        }
    }

    async updateEmployee(req,res){
        try {
            const id = req.params.id;
            const updatedEmployee = await Emp.findByIdAndUpdate({ _id:id},req.body,{new:true});

            if(!updatedEmployee){
                return res.status(404)
                            .json({
                                status:false,
                                message:"Employee not found"
                            })
            }

            return res.status(200).json({
                status: true,
                message: "Employee updated successfully",
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "something went wrong in updation",
                error: error.message,
              });
        }
    }

    async deleteEmployee(req,res){
        try {
            const id = req.params.id;
            const deletedEmp = await Emp.findByIdAndDelete(id)

            if(!deletedEmp){
                return res.status(404)
                            .json({
                                status:false,
                                message:"Employee not found"
                            })
            }

            return res.status(200).json({
                status: true,
                message: "Employee deleted successfully",
                data:deletedEmp
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "something went wrong in deletion.",
                error: error.message,
              });
        }
    }
    
}

module.exports = new EmpController();