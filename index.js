
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

document.getElementById("section_bg").onmouseout = function(event) {
    document.getElementById("section_bg").className = "bg_c_c";
};
document.getElementById("fill_up").onmouseover = function(event) {
    document.getElementById("section_bg").className = "height_o";
};

const navbar = document.getElementById("fill_up");
const section_bg = document.getElementById("section_bg");
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    } else {
    navbar.classList.remove("sticky");
    }
  } 





document.getElementById("facts_1").addEventListener("click", function(){
        
    document.getElementById("facts_1").className = "width_450";
    document.getElementById("facts").className = "width_450";
    document.getElementById("facts_bg").className = "opacity_0";
    document.getElementById("planet_inside").className = "facts_d";
    document.getElementById("exit").className = "exit";

    }, false);


document.getElementById("exit").addEventListener("click", function(){
        
    document.getElementById("facts_1").className = "width_50";
    setTimeout( function() { document.getElementById("facts").className = "";}, 400 );
    setTimeout( function() { document.getElementById("facts_bg").className = "";}, 1400 );
    setTimeout( function() { document.getElementById("planet_inside").className = "";}, 400 );
    setTimeout( function() { document.getElementById("exit").className = "";}, 400 );
    
    }, false);




        document.getElementById("div_1").onmouseout = function(event) {
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_1").onmouseover = function(event) {
            document.getElementById("div_1").className = "click";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };



        document.getElementById("div_2").onmouseout = function(event) {
            document.getElementById("div_2").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_2").onmouseover = function(event) {
            document.getElementById("div_2").className = "click_1";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };


        document.getElementById("div_3").onmouseout = function(event) {
            document.getElementById("div_3").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_3").onmouseover = function(event) {
            document.getElementById("div_3").className = "click_1";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };


        document.getElementById("div_4").onmouseout = function(event) {
            document.getElementById("div_4").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_4").onmouseover = function(event) {
            document.getElementById("div_4").className = "click_2";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };


        document.getElementById("div_5").onmouseout = function(event) {
            document.getElementById("div_5").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_5").onmouseover = function(event) {
            document.getElementById("div_5").className = "click";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };



        document.getElementById("div_6").onmouseout = function(event) {
            document.getElementById("div_6").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_6").onmouseover = function(event) {
            document.getElementById("div_6").className = "click_6";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };



        document.getElementById("div_7").onmouseout = function(event) {
            document.getElementById("div_7").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_7").onmouseover = function(event) {
            document.getElementById("div_7").className = "click_7";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };



        document.getElementById("div_8").onmouseout = function(event) {
            document.getElementById("div_8").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_9").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_8").onmouseover = function(event) {
            document.getElementById("div_8").className = "click_7";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };



        document.getElementById("div_9").onmouseout = function(event) {
            document.getElementById("div_9").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_10").className = "";
        };
        document.getElementById("div_9").onmouseover = function(event) {
            document.getElementById("div_9").className = "click_9";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_10").className = "opacity_hover";
        };



        document.getElementById("div_10").onmouseout = function(event) {
            document.getElementById("div_10").className = "";
            document.getElementById("div_1").className = "";
            document.getElementById("div_2").className = "";
            document.getElementById("div_3").className = "";
            document.getElementById("div_4").className = "";
            document.getElementById("div_5").className = "";
            document.getElementById("div_6").className = "";
            document.getElementById("div_7").className = "";
            document.getElementById("div_8").className = "";
            document.getElementById("div_9").className = "";
        };
        document.getElementById("div_10").onmouseover = function(event) {
            document.getElementById("div_10").className = "click_6";
            document.getElementById("div_1").className = "opacity_hover";
            document.getElementById("div_2").className = "opacity_hover";
            document.getElementById("div_3").className = "opacity_hover";
            document.getElementById("div_4").className = "opacity_hover";
            document.getElementById("div_5").className = "opacity_hover";
            document.getElementById("div_6").className = "opacity_hover";
            document.getElementById("div_7").className = "opacity_hover";
            document.getElementById("div_8").className = "opacity_hover";
            document.getElementById("div_9").className = "opacity_hover";
        };






        function URANUS() {
            document.getElementById("title").className = "uranus";
            document.getElementById("bolded").className = "uranus";
            document.getElementById("quick_facts").className = "uranus";
            document.getElementById("quick_facts_1").className = "uranus";
            document.getElementById("quick_facts_2").className = "uranus";
            document.getElementById("quick_facts_3").className = "uranus";
            document.getElementById("quick_facts_4").className = "uranus";
            document.getElementById("quick_facts_5").className = "uranus";
            document.getElementById("quick_facts_6").className = "uranus";
            document.getElementById("back_page").className = "uranus";
            document.getElementById("fit_boxer").className = "uranus";
            document.getElementById("last_pic").className = "uranus";
            document.getElementById("wikipedia_main").className = "uranus";
          }




          function SATURN() {
            document.getElementById("title").className = "saturn";
            document.getElementById("bolded").className = "saturn";
            document.getElementById("quick_facts").className = "saturn";
            document.getElementById("quick_facts_1").className = "saturn";
            document.getElementById("quick_facts_2").className = "saturn";
            document.getElementById("quick_facts_3").className = "saturn";
            document.getElementById("quick_facts_4").className = "saturn";
            document.getElementById("quick_facts_5").className = "saturn";
            document.getElementById("quick_facts_6").className = "saturn";
            document.getElementById("back_page").className = "saturn";
            document.getElementById("fit_boxer").className = "saturn";
            document.getElementById("last_pic").className = "saturn";
            document.getElementById("wikipedia_main").className = "saturn";
          }  



          function JUPITER() {
            document.getElementById("title").className = "jupiter";
            document.getElementById("bolded").className = "jupiter";
            document.getElementById("quick_facts").className = "jupiter";
            document.getElementById("quick_facts_1").className = "jupiter";
            document.getElementById("quick_facts_2").className = "jupiter";
            document.getElementById("quick_facts_3").className = "jupiter";
            document.getElementById("quick_facts_4").className = "jupiter";
            document.getElementById("quick_facts_5").className = "jupiter";
            document.getElementById("quick_facts_6").className = "jupiter";
            document.getElementById("back_page").className = "jupiter";
            document.getElementById("fit_boxer").className = "jupiter";
            document.getElementById("last_pic").className = "jupiter";
            document.getElementById("wikipedia_main").className = "jupiter";
          }  



          function MARS() {
            document.getElementById("title").className = "mars";
            document.getElementById("bolded").className = "mars";
            document.getElementById("quick_facts").className = "mars";
            document.getElementById("quick_facts_1").className = "mars";
            document.getElementById("quick_facts_2").className = "mars";
            document.getElementById("quick_facts_3").className = "mars";
            document.getElementById("quick_facts_4").className = "mars";
            document.getElementById("quick_facts_5").className = "mars";
            document.getElementById("quick_facts_6").className = "mars";
            document.getElementById("back_page").className = "mars";
            document.getElementById("fit_boxer").className = "mars";
            document.getElementById("last_pic").className = "mars";
            document.getElementById("wikipedia_main").className = "mars";
          }



          function EARTH() {
            document.getElementById("title").className = "earth";
            document.getElementById("bolded").className = "earth";
            document.getElementById("quick_facts").className = "earth";
            document.getElementById("quick_facts_1").className = "earth";
            document.getElementById("quick_facts_2").className = "earth";
            document.getElementById("quick_facts_3").className = "earth";
            document.getElementById("quick_facts_4").className = "earth";
            document.getElementById("quick_facts_5").className = "earth";
            document.getElementById("quick_facts_6").className = "earth";
            document.getElementById("back_page").className = "earth";
            document.getElementById("fit_boxer").className = "earth";
            document.getElementById("last_pic").className = "earth";
            document.getElementById("wikipedia_main").className = "earth";
          }



          function VENUS() {
            document.getElementById("title").className = "venus";
            document.getElementById("bolded").className = "venus";
            document.getElementById("quick_facts").className = "venus";
            document.getElementById("quick_facts_1").className = "venus";
            document.getElementById("quick_facts_2").className = "venus";
            document.getElementById("quick_facts_3").className = "venus";
            document.getElementById("quick_facts_4").className = "venus";
            document.getElementById("quick_facts_5").className = "venus";
            document.getElementById("quick_facts_6").className = "venus";
            document.getElementById("back_page").className = "venus";
            document.getElementById("fit_boxer").className = "venus";
            document.getElementById("last_pic").className = "venus";
            document.getElementById("wikipedia_main").className = "venus";
          }



          function MERCURY() {
            document.getElementById("title").className = "mercury";
            document.getElementById("bolded").className = "mercury";
            document.getElementById("quick_facts").className = "mercury";
            document.getElementById("quick_facts_1").className = "mercury";
            document.getElementById("quick_facts_2").className = "mercury";
            document.getElementById("quick_facts_3").className = "mercury";
            document.getElementById("quick_facts_4").className = "mercury";
            document.getElementById("quick_facts_5").className = "mercury";
            document.getElementById("quick_facts_6").className = "mercury";
            document.getElementById("back_page").className = "mercury";
            document.getElementById("fit_boxer").className = "mercury";
            document.getElementById("last_pic").className = "mercury";
            document.getElementById("wikipedia_main").className = "mercury";
          }