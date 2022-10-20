// Department name based on a department code

let codeDepartment = 5;
let nameofDepartment;

switch(codeDepartment)
{
case 1: 
    nameofDepartment = "Marketing";
break; 

case 5: 
    nameofDepartment = "Human Resources";
break; 
case 10: 
    nameofDepartment = "Accounting";
break; 
case 12: 
    nameofDepartment = "Legal";
break;
case 18: 
    nameofDepartment = "IT";
break;
case 20: 
    nameofDepartment = "Customer Relations";
break;
default:
    nameofDepartment = "unknown"
break;
}
console.log("Name of the department is " + nameofDepartment);