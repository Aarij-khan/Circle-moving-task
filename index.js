var header = document.getElementById("heading");
var centerBox = document.getElementById("center");
var mainBox = document.getElementById("main");

setInterval(() => {
    if (header.innerHTML == "Center") {
        header.innerHTML = "Starting...";
    } 
}, 2000);


setInterval(() => {
    if (header.innerHTML == "Starting...") {
        header.innerHTML = "Left";
        mainBox.style.justifyContent= "left";
        mainBox.style.backgroundColor= "aquamarine";
    }
    else if (header.innerHTML == "Left") {
        header.innerHTML = "right";
        mainBox.style.justifyContent= "right"
        mainBox.style.backgroundColor= "bisque";
    }
    else if (header.innerHTML == "right") {
        header.innerHTML = "Top";
        mainBox.style.alignItems= "flex-start";
        mainBox.style.justifyContent= "center";
        mainBox.style.backgroundColor= "lightsteelblue";
    }
    else if (header.innerHTML == "Top"){
        header.innerHTML = "Bottom";
        mainBox.style.alignItems= "flex-end";
        mainBox.style.justifyContent= "center";
        mainBox.style.backgroundColor= "burlywood";
    }
    else{
        header.innerHTML = "Finish";
         mainBox.style.backgroundColor= "tomato";
         mainBox.style.alignItems= "center";
         mainBox.style.justifyContent= "center";
    }
}, 3000);
