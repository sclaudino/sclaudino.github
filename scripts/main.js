var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/golfinho-pequeno.jpg') {
        myImage.setAttribute ('src', 'imagens/logo-golfinho.png');
        } else {
            myImage.setAttribute ('src', 'imagens/golfinho-pequeno.jpg');
        } 
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Por Favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Seja bem-vindo à Academia Golfinho, ' + myName + '!';
}


if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Seja bem-vido à Academia Golfinho, ' + storedName + '!';
}


myButton.onclick = function() {
    setUserName();
}