const express = require('express');
const EmpController = require('../controller/empController')

const router = express.Router();

router.post('/create-emp',EmpController.createEmployee)
router.get('/get-emp',EmpController.getEmployee)
router.get('/get-emp/:id',EmpController.getEmpById)
router.put('/update-emp/:id',EmpController.updateEmployee)
router.delete('/delete-emp/:id',EmpController.deleteEmployee)
router.get('/search-emp',EmpController.searchEmployee)


module.exports = router;