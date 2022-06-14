let rooms = [
    ['XXX', 1],
    ['X', 2],
  
];
//let countPeople = rooms.shift().length;
let datas = [];
// let haveCountChair = rooms.slice(-1);
for (let i = 0; i < rooms.length; i++) {
    // for (let j = 1; j < rooms[i].length; j++) {
        // datas.push(rooms[i][j]);
        // console.log(datas);
        let countPeople = rooms[i][0].length ;
        console.log(countPeople);
        let countChair = rooms[i][1];
        console.log(countChair);
        let diff = countPeople-countChair;
        console.log(diff);
        let result = diff ;
        console.log(result);
}


function meeting(allCountPeople, allCountChair) {
    if (allCountChair < allCountPeople) {
        return "Not enough!"
    }
    "Game On!"
}



// (function () {
//     let num1 = +prompt("enter first number");
//     let num2 = +prompt("enter second number");
//     let op = prompt("enter one of operators +,-,*,/ ");
//     let result;

//     switch (op) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "you must choose oparition!";
//     }
//     alert(`Result: ${num1} ${op} ${num2} = ${result}`);
// })();