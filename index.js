// Write your solution in this file!
const employee = {
    name: "John",
    address: "661 N 1st Street",
}
function updateEmployeeWithKeyAndValue(employee, address) {
    return {
         ...employee,
        [address]: "11 Broadway"
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, address) {
    employee[address] = "12 Broadway"
    return employee;
    };
function deleteFromEmployeeByKey(employee, name) {
        const newEmployee = delete{...employee[name]};
        return{newEmployee}         
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]
    return employee
}
