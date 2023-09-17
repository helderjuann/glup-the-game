var objImage = null;
        
function init() {
    objImage = document.getElementById("box");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
}

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 65: 
            moveLeft();
            break;
        case 87: 
            moveUp();
            break;
        case 68: 
            moveRight();
            break;
        case 83: 
            moveDown();
            break;
    }
}

function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 20 + "px";
    objImage.style.transform = "ScaleX(-1)";
}

function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 20 + "px";
}

function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 20 + "px";
    objImage.style.transform = "ScaleX(1)";
}

function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 20 + "px";
}

window.onload = init;