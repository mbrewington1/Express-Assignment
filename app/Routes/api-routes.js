let employees = require('../data/employees');



module.exports = function(app){


   app.post('/api/employee', (req, res)=> {
       console.log(req.body)
       employees.push(req.body);
       console.log(employees)
       res.send(employees[3]);
   })

}