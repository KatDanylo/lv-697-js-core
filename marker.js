const inp = document.querySelector('#marker_text');
const out = document.querySelector('#out_marker_text');
//const bntColor = document.querySelector('.create-color-input');
const createMarker = document.querySelector('.add-marker');
class Marker {
    constructor( color,percentInk) {
        this.color = color;
        this.percentInk = percentInk;
    // constructor(options) {
    //     this.color = this.options;
    //     this.percentInk = this.options;
    }
    // set percentInk(newValue){
    //     return this.percentInk=newValue;
    // }
    print() {
        out.style.background = this.color;
    };
}
const inpWithColor = document.getElementById('color-palitra');


inpWithColor.addEventListener('change', updateColor);
    function updateColor(event){
        var colorInp;
        createMarker.style.background = event.target.value;
        return colorInp = event.target.value;  
    } 
console.log(colorInp);

createMarker.addEventListener('click' , addNewMarker);
function addNewMarker (){
    const percentInk = +document.querySelector('#percentInk').value;
    const marker = new Marker(colorInp, percentInk)
    console.log(Marker );
}



/*bntColor.addEventListener('click', createInpColor,{'once': true});

function createInpColor(){
    let inpColor = document.createElement('INPUT');
    inpColor.setAttribute("type","color");
    inpColor.setAttribute("id","color-palitra");
    bntColor.appendChild(inpColor);
}*/


let str = String(inp.value);
inp.addEventListener('input', countSign);


function countSign(str) {   
    let strWithoutSpace = str.match(/\S/g);
    console.log(strWithoutSpace)
    return strWithoutSpace.length * 0.5;
}

