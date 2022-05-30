let enterNumber = +prompt("enter your ticket number");
const numberTicket = Array.from(enterNumber);
compareNumberTicket(numberTicket);
function compareNumberTicket(nums){
(nums.length != 6)&&(nums.isNaN) ? alert( "you must enter only 6 numbers"):alert("let's go!");
if (nums[0]+nums[1]+nums[2] === nums[3]+nums[4]+nums[5] ){
return "Congratulatin! Magic number your ticket!"};
};


let celsius = +prompt('enter level temperature in celsius');
let fahrenheit =  celsius*1.8+32;
alert(`this teperature are ${fahrenheit} fahrenheit`);

