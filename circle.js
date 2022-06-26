
class CircleDescribe {
    constructor(r){
        this.r = r;
    }
    get d (){
        return this.r*2;
    }
    // set r(newR){
    //     return this.r = newR
    // }
    set d(newD){
        return this.d = newD;
    }
    cirleLenght(){
        return Math.PI*this.d
    }
    area(){
        return Math.PI*(this.r*this.r);
    }
}
const inpR = document.querySelector('#radius');
const outR = document.querySelector('#result');

inpR.addEventListener('input',() => {});


const circle1 = new CircleDescribe(82);
console.log(`diametr = ${circle1.d}, area = ${circle1.area()}, circle lenght =  ${circle1.cirleLenght()}, radius = ${circle1.r}`);
const circle2 = new CircleDescribe(8);
console.log(circle2);
outR.innerHTML = circle1.area();
