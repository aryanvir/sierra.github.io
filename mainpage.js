let navbar_toggle = false;
const fbox2 = document.querySelector('.first-panel');
fbox2.classList.remove('first=panel-animation');

window.addEventListener('load', function(){
    let obj = document.querySelector(".main")
    obj.style.display = "inline";
    obj.style.visibility = "hidden"

    setInterval(() => {
        navbar_toggle = true;
        document.querySelector(".loader").remove()
        obj.style.visibility = "visible";
        fbox2.classList.add('first-panel-animation');
        document.querySelector("body").style.backgroundColor = "black";
        
        
    }
    , 3000);
        

    setInterval(() => {
        document.querySelector('.flexi').style.visibility = "hidden";

    }, 5000)
})

$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.solid-adder').addClass('solid');
      } else {
          $('.solid-adder').removeClass('solid');
      }
    });
});


let hero = document.querySelector('.first-panel');
let text = hero.querySelector('h1');
let text2 = hero.querySelector('h2');
let btn = document.querySelector('.btn')

let secondPanel = document.querySelector('.second-panel');
let secondPanelText = secondPanel.querySelector('h1');

let thirdPanel = document.querySelector('.third-panel');
let thirdPanelText = thirdPanel.querySelector('h1');
let walk = 50;
let walkx = 75;

function shadow(e){
    var {offsetWidth: width, offsetHeight: height} = hero;
    var {offsetX: x, offsetY: y} = e;

    if (this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }

    var xWalk = Math.round((x / width * walkx) - (walkx / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.margin = `${yWalk/2}px ${xWalk/2}px ${-yWalk/2}px ${xWalk/2}px`;
    text2.style.margin = `${yWalk/2}px ${xWalk/2}px ${-yWalk/2}px ${xWalk/2}px`;
    btn.style.margin = `${yWalk/2}px ${xWalk/2}px ${-yWalk/2}px ${xWalk/2}px`;


    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.0005}% ${50 - (_mouseY - _h) * 0.0005}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.003}% ${50 - (_mouseY - _h) * 0.003}%`;
    var x = `${_depth3}, ${_depth2}, ${_depth1}`;
    hero.style.backgroundPosition = x; 
   
    // `${xWalk}px ${yWalk}px 0px white`
}

function secondPanelShadow(event){
    var {offsetWidth: width, offsetHeight: height} = secondPanel;
    var {offsetX: x, offsetY: y} = event;

    if (this !== event.target){
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    var xWalk = Math.round((x / width * walkx) - (walkx / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));
	secondPanelText.style.margin = `${yWalk/2}px ${-xWalk/2}px ${-yWalk/2}px ${xWalk/2}px`;
         let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = event.clientX;
        let _mouseY = event.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.0005}% ${50 - (_mouseY - _h) * 0.0005}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.003}% ${50 - (_mouseY - _h) * 0.003}%`;
        var x = `${_depth3}, ${_depth2}, ${_depth1}`;
        secondPanel.style.backgroundPosition = x; 
}

function thirdPanelShadow(event2){
    var {offsetWidth: width, offsetHeight: height} = thirdPanel;
    var {offsetX: x, offsetY: y} = event2;

    if (this !== event2.target){
        x = x + event2.target.offsetLeft;
        y = y + event2.target.offsetTop;
    }

    var xWalk = Math.round((x / width * walkx) - (walkx / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));

    thirdPanelText.style.margin = `${yWalk/2}px ${-xWalk/2}px ${-yWalk/2}px ${xWalk/2}px`;
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = event2.clientX;
    let _mouseY = event2.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.0005}% ${50 - (_mouseY - _h) * 0.0005}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.003}% ${50 - (_mouseY - _h) * 0.003}%`;
    var x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    thirdPanel.style.backgroundPosition = x; 
    
}


secondPanel.addEventListener('mousemove', secondPanelShadow);
thirdPanel.addEventListener('mousemove', thirdPanelShadow);



const fbox1 = document.querySelector('.second-panel');
fbox1.classList.remove('second-panel-animation');
const observer_fbox1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && navbar_toggle) {

            fbox1.classList.add('second-panel-animation');
        }
    });
});
observer_fbox1.observe(document.querySelector('.second-panel'));





const fbox3 = document.querySelector('.third-panel');

fbox3.classList.remove('third-panel-animation');
const observer_fbox3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && navbar_toggle) {
            fbox3.classList.add('third-panel-animation');
        }
    });
});
observer_fbox3.observe(document.querySelector('.third-panel'));
