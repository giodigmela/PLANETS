
var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);

var enter = document.getElementById("enter")

enter.addEventListener("click", function(){
        
        setTimeout( function() { window.location = 'index_two.html'}, 1000 );

        setTimeout( function() { document.getElementById("enter_1").className = "none"; }, 500 );
        setTimeout( function() { document.getElementById("enter_2").className = "none"; }, 500 );


        setTimeout( function() { document.getElementById("blacked").className = "zero"; }, 0 );

    }, false);

setTimeout( function() { window.addEventListener("keypress", checkKeyPress, false)}, 17000 );
function checkKeyPress(key){

    if(key.keyCode == "13"){

        setTimeout( function() { window.location = 'index_two.html'}, 42000 );

        document.getElementById("blacked").className = "zero"; 

        document.getElementById("uranus").className = "one";
        document.getElementById("t_1").className = "t_one";

        document.getElementById("neptune").className = "two";
        document.getElementById("t_2").className = "t_two";

        document.getElementById("venus").className = "three";
        document.getElementById("t_3").className = "t_three";

        document.getElementById("mars").className = "four";
        document.getElementById("t_4").className = "t_four";

        document.getElementById("mercury").className = "five";
        document.getElementById("t_5").className = "t_five";

        document.getElementById("saturn").className = "six";
        document.getElementById("t_6").className = "t_six";

        document.getElementById("saturn_bg").className = "six_half";

        document.getElementById("jupiter").className = "seven";
        document.getElementById("t_7").className = "t_seven";

        document.getElementById("earth").className = "eight";
        document.getElementById("t_8").className = "t_eight";

        document.getElementById("sun").className = "nine";
        document.getElementById("t_9").className = "t_nine";


        setTimeout( function() { document.getElementById("blacked_two").className = "ten"; }, 41000 );

    }
}

var TSS = document.getElementById("TSS")
setTimeout( function() { TSS.className = 'after'}, 7000 );


document.getElementById("planets_s").onmouseout = function(event) {
    document.getElementById("planets_s").className = "";
};
document.getElementById("planets_s").onmouseover = function(event) {
    document.getElementById("planets_s").className = "w_h_1";
};



document.getElementById("dwarf_planets_s").onmouseout = function(event) {
    document.getElementById("dwarf_planets_s").className = "";
};
document.getElementById("dwarf_planets_s").onmouseover = function(event) {
    document.getElementById("dwarf_planets_s").className = "w_h_4";
};


document.getElementById("sun_s").onmouseout = function(event) {
    document.getElementById("sun_s").className = "";
};
document.getElementById("sun_s").onmouseover = function(event) {
    document.getElementById("sun_s").className = "w_h_1";
};



document.getElementById("hypotetical_s").onmouseout = function(event) {
    document.getElementById("hypotetical_s").className = "";
};
document.getElementById("hypotetical_s").onmouseover = function(event) {
    document.getElementById("hypotetical_s").className = "w_h_1";
};



document.getElementById("moons_s").onmouseout = function(event) {
    document.getElementById("moons_s").className = "";
};
document.getElementById("moons_s").onmouseover = function(event) {
    document.getElementById("moons_s").className = "w_h_1";
};



document.getElementById("asteroids_comets_meteors_s").onmouseout = function(event) {
    document.getElementById("asteroids_comets_meteors_s").className = "";
};
document.getElementById("asteroids_comets_meteors_s").onmouseover = function(event) {
    document.getElementById("asteroids_comets_meteors_s").className = "w_h_2";
};



document.getElementById("beyond_our_solar_system_s").onmouseout = function(event) {
    document.getElementById("beyond_our_solar_system_s").className = "";
};
document.getElementById("beyond_our_solar_system_s").onmouseover = function(event) {
    document.getElementById("beyond_our_solar_system_s").className = "w_h_3";
};
