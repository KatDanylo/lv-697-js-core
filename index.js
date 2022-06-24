const inp = document.querySelector('#marker_text');
const out = document.querySelector('#out_marker_text');
let count = 0;
class Marker {
    constructor(color, percentInk) {
        color = this.color;
        percentInk = this.percentInk;
    }
    print() {
       //console.log(`this text must be ${colour} colour`);
        inp.style.color = this.color;
    };

    static countSign(percentInk) {
        if (percentInk <= 0) {
            console.log(`Marker is empty.Please add some ink`);
        }
        return percentInk - 0.5;
    }
}
inp.addEventListener('input', ()=>{sumSign});

function sumSign(count) {
    return  (inp.value = ' ' ? count = count : count++)
}

out.textContent = count;
const redMarker = new Marker('red', 100);
redMarker.print();





class CircleDescribe {
    constructor(r){
        r = this.r;
    }
    get d (){
        return this.r*2;
    }
    // set (){
    //     return this.r;
    // }
    cirleLenght(){
        return Math.PI*this.d
    }
    area(){
        return Math.PI*(this.r*this.r);
    }
}

const circle1 = new CircleDescribe(7);
console.log(circle1.area());


