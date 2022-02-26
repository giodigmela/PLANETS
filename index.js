document.addEventListener("mousemove", parallax);

var no = document.getElementById("no");
var yes = document.getElementById("yes");
var wall = document.getElementById("wall");
var question = document.getElementById("question");
var jupiter = document.getElementById("jupiter");
var okey = document.getElementById("okey");

var astr = document.getElementById("astr");

var wing_1 = document.getElementById("wing_1");
var wing_2 = document.getElementById("wing_2");

var transition = document.getElementById("transition");
var transition_white = document.getElementById("transition_white");

var video_z = document.getElementById("video_z");

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {

        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/1000
        const y = (window.innerHeight - e.pageY*speed)/1000

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    })
}


setTimeout( function() { astr.className = 'animation_af'}, 6500 );

yes.onclick = function(){

    wing_1.className = 'after';
    wing_2.className = 'after';
    transition.className = 'after_b';
    transition_white.className = 'after_c';
    question.className = 'fade';

    setTimeout( function() { window.location = 'index_two.html' }, 5500 );

    setTimeout( function() { video_z.play(); }, 1000 );
    video_z.className = 'in';
};

no.onclick = function(){

    wall.className = 'darken';
    question.className = 'fade';
    okey.className = 'appear';
    jupiter.className = 'appear';
    setTimeout( function() { window.location = 'https://www.google.com/' }, 3500 ); 
};


