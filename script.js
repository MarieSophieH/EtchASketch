document.addEventListener("DOMContentLoaded", function() {

    var newDiv1 = document.createElement("div");
    newDiv1.style.textAlign = "center";
    document.body.appendChild(newDiv1);
    

    var button = document.createElement("button");
    button.innerHTML ="Set number of squares";
    button.id = "button";
    button.style.width = "200px";
    button.style.marginBottom = "50px";
    
    newDiv1.appendChild(button);

    var newDiv2 = document.createElement("div");
    newDiv2.style.display ="flex";
    newDiv2.style.flexWrap = "wrap";
    newDiv2.style.alignItems = "center";
    newDiv2.style.width = "550px";
    newDiv2.style.height = "550px";
    newDiv2.style.border = "0.1px solid black";
    newDiv2.style.margin = "0 auto";
    newDiv2.id = "parent";


    newDiv1.appendChild(newDiv2);
    
    let measurements = ((550)/16) ;

    for (let a=0; a<16;a++){
        for(let i=0; i<16; i++) {
        var newDiv = document.createElement("div");
        newDiv.style.width = measurements + "px";
        newDiv.style.height = measurements + "px";
        newDiv.style.background = "white";
        newDiv.style.outline = "1px solid black";
        newDiv.classList.add("container");
        newDiv2.appendChild(newDiv);
}}

    var parent = document.getElementById("parent");

    parent.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("container")) {
        var a = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var c = Math.floor(Math.random() * 255);
        event.target.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
    }
    });

    document.getElementById("button").addEventListener("click", function() {
        removeElementsByClass("container");
        let input = prompt("Enter the number of squares per side.");

        for (let x=0; x<input;x++){
            for(let i=0; i<input; i++) {
            var newDiv = document.createElement("div");
            let measurements=700/input;
            newDiv.style.width = measurements + "px" ;
            newDiv.style.height = measurements + "px";
            newDiv.style.background = "white";
            newDiv.style.outline = "1px solid black";
            newDiv.classList.add("container");
            newDiv2.appendChild(newDiv);
    }}

    });

   
  });

  function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}













