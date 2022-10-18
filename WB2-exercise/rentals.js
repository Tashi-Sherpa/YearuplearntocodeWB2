var numberofPeople = 60;
var vanCapacity = 15;
var vanCharge = 250;
var vanNeeded = (numberofPeople) / (vanCapacity);
var vanCost = (vanCharge) * (vanNeeded);
var eachPerson = (vanCost) / (numberofPeople);

console.log( "We need " + vanNeeded + " vans that costs us $" + vanCost + 
            " altogether and $" + Math.round(eachPerson) + 
            " individually ");