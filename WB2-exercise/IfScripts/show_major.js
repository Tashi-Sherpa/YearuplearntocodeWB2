
var studentName = "Jim";
var studentMajor = "ENG";

console.log("student: " + studentName);

if (studentMajor == "BIOL") 
{
console.log("Major: Biology" + "\nAdvising location: Science Bldg, Room 310 ");
}
else if (studentMajor == "CSCI") 
{
console.log("Major: Computer Science" + "\nAdvising location: Sheppard Hall. Room 314");
}

else if (studentMajor == "ENG") 
{
console.log("Major: Engilsh" + "\nAdvising location: Kerr Hall, Room 201 ");
}
else if (studentMajor == "HIST") 
{
console.log("Major: History" + "\nAdvising location: Kerr Hall, Room 114 ");
}
else if (studentMajor == "MKT") 
{
console.log("Major: Marketing" + "\nAdvising location: Westly Hall, Room 310 ");
}
else
{
    console.log(studentName + "Major: unknown")
}

