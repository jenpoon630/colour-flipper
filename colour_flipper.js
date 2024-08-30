// is a list
let body = document.getElementsByTagName("body")[0]

function setColour(colour){
    body.style.backgroundColor = colour;
}

function randomColour(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const colour = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = colour;
}


