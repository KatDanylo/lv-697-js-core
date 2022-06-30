
class CircleDescribe {
    constructor(r){
        this.r = r;
    }
    get d (){
        return this.r*2;
    }
    // set r(_r){
    //  this.r = _r;
    // }
    set d(newD){
        return this.d = newD;
    }
    cirleLenght(){
        return Math.PI*this.d;
    }
    area(){
        return Math.PI*(this.r*this.r);
    }
}
const outRadius = document.querySelector('#out-radius');
const outDiametr = document.querySelector('#diametr');
const outArea = document.querySelector('#area');
const outCircleLenght = document.querySelector('#circle-lenght');
const count = document.querySelector('.count');

count.addEventListener('click',countCicleParams);

function countCicleParams(){
    let inpR = +document.querySelector('#inp-radius').value;
    const circle = new CircleDescribe(inpR);
    console.log(circle);
    outRadius.innerHTML = circle.r;
    outDiametr.innerHTML = circle.d;
    outArea.innerHTML = circle.area();
    outCircleLenght.innerHTML = circle.cirleLenght();
}
