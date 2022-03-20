
var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);


var TSS = document.getElementById("TSS")
setTimeout( function() { TSS.className = 'after'}, 7000 );


var enter = document.getElementById("enter")

enter.addEventListener("click", function(){setTimeout( function() { window.location = 'index_two.html'}, 0 );}, false);


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
