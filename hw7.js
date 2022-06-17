const inpEmail = document.getElementById(inputEmail);
//inpEmail.addEventListener('input');
// let email = inpEmail.innerText;
// let res = email.replace(/\D/);
// console.log(inpEmail);





// task 3
(function(){
    const btn_show = document.querySelector('#show_modal');
    const btn_close = document.querySelector('#close_modal');
    const modal_window = document.querySelector('.modal');
    console.log(btn_close,btn_show);
    btn_show.addEventListener("click", ()=>{modal_window.classList.toggle("visible")});
    btn_close.addEventListener("click",()=>{ modal_window.classList.toggle("visible")});
})();

//Task 4

(function(){
const clock= document.querySelector(".clock");
function updateClock(){
clock.innerHTML = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
})();

//task1

(function(){

function getRandomColour(){
    const letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++){
        colour += letters[Math.floor(Math.random()*16)];
    }
return colour;
}
console.log( getRandomColour());

})();
