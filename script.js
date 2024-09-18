
//our variables

const helloBtn = document.querySelector("#helloBtn");
const colorBtn = document.querySelector("#colorBtn");
const helloTag = document.querySelector(".helloTag");
const bodySection = document.querySelector("body");

// Add listeners

helloBtn.addEventListener(
"click", 
addHello
);

colorBtn.addEventListener(
    "click",
    function(){bodySection.style.background = "blue";}
);


function addHello() {
    helloTag.innerHTML="Hello"
};