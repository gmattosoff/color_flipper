const body = document.getElementsByTagName('body');
let h1 = document.getElementsByTagName('h1');
let name = document.getElementById('name');

const colors = ['DarkBlue', 'Purple', 'DarkRed', 'Orange', 'Green'];

var i = 0;

var simple = true;

function flip() {
    if (simple) {
        if (i < 4) {
            body[0].style.background = colors[i+1];
            h1[0].style.color = colors[i+1];
            i++;
        } else {
            body[0].style.background = colors[0];
            h1[0].style.color = colors[0];
            i = 0;
        }
        name.innerHTML = "Background Color: " + colors[i];
    } else {
        var code = "#"
        var chars = "ABCDEFabcdef0123456789"
        for (var c=0; c<6; c++) {
            code += chars.charAt(Math.random()*chars.length);
        }
        name.innerHTML = "Background Color: " + code;
        h1[0].style.color = code;
        body[0].style.background = code;
    }
}

function simp() {
    simple = true;
}

function hex() {
    simple = false;
}