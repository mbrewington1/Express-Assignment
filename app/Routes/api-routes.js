let employees = require('../data/employees');



module.exports = function(app){


   app.post('/api/employee', (req, res)=> {
        const newEmployee = req.body;
        console.log(newEmployee)
        let lowestDiff = null;
        let bestMatch;
        for( var i = 0; i < employees.length; i++){
            const currentEmployee = employees[i];
            let totalDiff =0;
            for(var j = 0; j < currentEmployee.scores.length; j++){
                const diff = parseInt(currentEmployee.scores[j]) - parseInt(newEmployee.scores[j]);
                totalDiff += Math.abs(diff);
            }
            console.log(totalDiff, "This is the totoal diff")
            console.log(currentEmployee, "This is the current employee")
            if(totalDiff < lowestDiff || lowestDiff == null){
                lowestDiff = totalDiff;
                bestMatch = currentEmployee;

            }
        }
        console.log(bestMatch, "Thsiis the bet match")

       employees.push(req.body);
       
       res.send(bestMatch);
   });

   app.get('/api/employees', (req, res)=> {
       console.log(employees);
    res.json(employees);
});
}