// function findLongestWord (string){
// const words = string.split(' ');
// let longestWord = 0;
// for (let i = 0; i < words.length; i++) {
//     if ( words[i].length > longestWord) {
//         longestWord = words[i].length
//     };
// };
//     return console.log(`Найдовше слово, що ви ввели = ${longestWord} символів` );

// };
// let string = prompt("enter sentence");
// findLongestWord(string);





// function findNumber(enterWords) {
//     let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let arr = enterWords.split(" ");
//     let results = []
//     for (let i = 0; i < arr.length ; i++) {
//     if (arr.includes(nums)) {
//         results[i].push(arr[i]);
//         console.log(results);
//     }
//     return results = " ";}
// };
// let enterWords = prompt("enter a word with one number in it a range 1 to 9");
// findNumber(enterWords);


let product = [
{   "id":"1",
    "name":"bread",
    "count":2,
    "price":25
},
{   "id":"2",
    "name":"butter",
    "count":1,
    "price":55
},
{   "id":"3",
    "name":"mikl",
    "count":4,
    "price":30
}];
let list = Object.entries(product);


console.log(list);