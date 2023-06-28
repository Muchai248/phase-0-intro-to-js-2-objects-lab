// Write your solution in this file!
const employee={
    
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const clonedEmployee = { ...employee }
    clonedEmployee[key] = value;
    return clonedEmployee;
  }
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;

}

function  deleteFromEmployeeByKey(employee, key){
   const obj={...employee}
   delete obj[key];
   return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
