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
