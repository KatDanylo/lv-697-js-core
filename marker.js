const inp = document.querySelector('#marker_text');
const out = document.querySelector('#out_marker_text');
let str = '';
class Marker {
    constructor(color, percentInk) {
        color = this.color;
        percentInk = this.percentInk;
    }
    print() {
        //console.log(`this text must be ${color} color`);
        //inp.style.color = 'color';
    };
}
inp.addEventListener('input', () => {
    return str = inp.value
});

strWithoutSpace = str.match(/\S/g);

function countSign(percentInk) {
    if (percentInk <= 0) {
        console.log(`Marker is empty.Please add some ink`);
    }
    return percentInk - (strWithoutSpace.length * 0.5);
}

console.log(strWithoutSpace);
const redMarker = new Marker('red', 100);
redMarker.print();