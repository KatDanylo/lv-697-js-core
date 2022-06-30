const inp = document.querySelector('#marker_text');
const out = document.querySelector('#out_marker_text');
//const bntColor = document.querySelector('.create-color-input');
const createMarker = document.querySelector('.add-marker');
let colorInp;
let percent;
class Marker {
    constructor( color,percentInk) {
        this.color = color;
        this.percentInk = percentInk;
    }

    print() {
        let finalPercent = this.percentInk - percent;
        if (finalPercent >=0) {
        out.style.color = this.color;
        out.innerHTML = finalPercent;
        } else{
        console.log ('MARKER IS EMPTY. YOU NEED ADD INK');}
    };
}
const inpWithColor = document.getElementById('color-palitra');


inpWithColor.addEventListener('change', updateColor);
function updateColor(event){
    createMarker.style.background = event.target.value;
    colorInp = event.target.value;  
} 


createMarker.addEventListener('click' , addNewMarker);
function addNewMarker (){
    const percentInk = +document.querySelector('#percentInk').value;
    const marker = new Marker(colorInp, percentInk)
    marker.print();
}

inp.addEventListener('input', countSign);

function countSign() {   
    let strWithoutSpace = inp.value.replace(/\s/g,'');
    percent = strWithoutSpace.length * 0.5;
    addNewMarker();
}


/*bntColor.addEventListener('click', createInpColor,{'once': true});

function createInpColor(){
    let inpColor = document.createElement('INPUT');
    inpColor.setAttribute("type","color");
    inpColor.setAttribute("id","color-palitra");
    bntColor.appendChild(inpColor);
}*/



