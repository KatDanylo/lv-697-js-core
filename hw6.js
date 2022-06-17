const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const inp = document.getElementById('result').innerHTML;
let currentCount;
console.log(inp);


function plusCount(currentCount) {
    return currentCount ++;
}

function minusCount(currentCount) {
    if(currentCount<0){currentCount=0}
    return currentCount --;
}


btnPlus.addEventListener('click', plusCount);
btnMinus.addEventListener('click', minusCount);
inp.innerHTML = currentCount;
    




const circles = document.querySelectorAll(".circle");
let activeLight = 0;
const btnLight = document.querySelector(".btn_light");

function addActiveClass(){
    circles[activeLight].classList = 'circle';
    activeLight++;

    if (activeLight>2) {
         activeLight=0;
        }

    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
    }

 btnLight.addEventListener('click',  addActiveClass);


