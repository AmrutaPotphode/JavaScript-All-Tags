const headingE1 = document.getElementById("heading");

console.log(headingE1.classList.Contains("my-h1"));

function addClass(){
    headingE1.classList.add("b");
}

function removeClass(){
    headingE1.classList.remove("b");
}

function toggleClass(){
    headingE1.classList.toggle("active");
}

function hideShow(){
    headingE1.classList.toggle("hide");
}