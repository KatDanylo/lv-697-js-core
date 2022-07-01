const inp_string = document.querySelector('#inp_string').value;
const change_letter = document.querySelector('#change_letter').value;
const replace_str = document.querySelector('#replace_str');
const out = document.querySelector('#out_str');
const regExp = /[AEIOUYАУЕОИІ]/gi;

function replaceStr() { 
    let changedStr = inp_string.replace(regExp, change_letter.value);
    console.log( changedStr)
    out.innerHTML = changedStr;
}
replace_str.addEventListener('click', replaceStr);