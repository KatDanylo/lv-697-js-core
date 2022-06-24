const inp = document.querySelector('#marker_text');
const out = document.querySelector('#out_marker_text');
let count = 0;
class Marker {
    constructor(colour, percentInk) {
        colour = this.colour;
        percentInk = this.percentInk;
    }
    print() {
        console.log(`this text must be ${colour} colour`);
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
    (inp.value = ' ' ? count = count : count++)
    return count;
}

out.textContent = count;