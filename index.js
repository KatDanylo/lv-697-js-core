const str =document.querySelector('#morse');
const btn = document.querySelector('#decode');
const out = document.querySelector('.out');
btn.addEventListener('click', decodeMorse);
function a() { console.log(str.value)};

//let str = '.----   ..---   .   --...   .-   ....   --.-';
const alphabet= {    
    '.----':'1',
    '..---':'2',
    '...--':'3',
    '....-':'4',
    '.....':'5',
    '-....':'6',
    '--...':'7',
    '---..':'8',
    '----.':'9',
    '-----':'0',
    '.-':'A',
    '-...':'B',
    '-.-.':'C',
    '-..':'D',
    '.':'E',
    '..-.':'F',
    '--.':'G',
    '....':'H',
    '..':'I',
    '.---':'J',
    '-.-':'K',
    '.-..':'L',
    '--':'M',
    '-.':'N',
    '---':'O',
    '.--.':'P',
    '--.-':'Q',
    '.-.':'R',
    '...':'S',
    '-':'T',
    '..-':'U',
    '...-':'V',
    '.--':'W',
    '-..-':'X',
    '-.--':'Y',
    '--..':'Z',
    ' ':' '
};

function decodeMorse(){
const words = str.value.split(' ');
console.log( words);
const result = words.map(c => alphabet[c]);
console.log(result);
out.innerHTML = result;}
