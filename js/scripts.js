let wheelOfLuck = document.querySelector('.wheel');
let spinButton = document.querySelector('.spin-me');
let degValue = Math.ceil(Math.random() * 1000);

function spinTheWheel() {
    wheelOfLuck.style.transform = "rotate(" + degValue + "deg)";
	degValue += Math.ceil(Math.random() * 1000);
}

function redirectMe() {
    setTimeout(function(){
        window.location.replace("https://www.winpot.mx/");
    }, 3000)
}

spinButton.addEventListener('click', spinTheWheel);
wheelOfLuck.addEventListener('transitionend', redirectMe);






