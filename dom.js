// dom.js

// Selecting element by ID
const heading = document.getElementById("my-h1");
console.log(heading.innerHTML);

function changeContent() {
    const text = prompt("Add the content");
    heading.innerHTML = text;
}

// Selecting element by ClassName
const heading2 = document.getElementsByClassName("my-h2");
console.log(heading2[0].innerHTML);

// Selecting by tagName
const allHeadings = document.getElementsByTagName("h1");
console.log("Total h1s:", allHeadings.length);

// querySelector (selects first match)

// querySelectorAll (selects all matches)
const allH2 = document.querySelectorAll(".my-h2");
console.log("QuerySelectorAll:", allH2);

// Show and Hide Functions
function showH1() {
    heading.style.display = "block";
}

function hideH1() {
    heading.style.display = "none";
}
