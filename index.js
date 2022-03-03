var TSS = document.getElementById("TSS")

setTimeout( function() { TSS.className = 'after'}, 7000 );


var enter = document.getElementById("enter")




setTimeout( function() { window.addEventListener("keypress", checkKeyPress, false)}, 17000 );


function checkKeyPress(key){

    if(key.keyCode == "13"){

        setTimeout( function() { window.location = 'planets.html'}, 1000 );

    }
}

enter.onclick = function (){

    setTimeout( function() { window.location = 'planets.html'}, 1000 );
    
}
