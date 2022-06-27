const inp = document.querySelector('#marker_text');
const out = document.querySelector('#out_marker_text');
const bntColor = document.querySelector('.create-color-input');
const percentInk = document.querySelector('#percentInk').value;
const createMarker = document.querySelector('.add-marker');
const inpColor = document.getElementById('color-palitra');
class Marker {
    constructor(color, percentInk) {
        color = this.color;
        percentInk = this.percentInk;
    }
    // set percentInk(newValue){
    //     return this.percentInk=newValue;
    // }
    print() {
        //console.log(`this text must be ${color} color`);
        //inp.style.color = 'color';
    };
}
createMarker.addEventListener('click' , addNewMarker);
function addNewMarker (){
    const marker = new Marker(colorInp, percentInk)
    console.log(marker);
}

bntColor.addEventListener('click', createInpColor,{'once': true});

function createInpColor(){
    let inpColor = document.createElement('INPUT');
    inpColor.setAttribute("type","color");
    inpColor.setAttribute("id","color-palitra");
    bntColor.appendChild(inpColor);
}
inpColorG.addEventListener('change', updateColor);
function updateColor(e){
    bntColor.style.color = e.target.value;
    return colorInp = e.target.value;
}

let str = inp.value;
inp.addEventListener('input', ()=>{console.log(inp.value,typeof( inp.value))});


function countSign(str) {   
    let strWithoutSpace = str.match(/\S/g);
    return strWithoutSpace.length * 0.5;
}

