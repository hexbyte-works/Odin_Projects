const link = document.querySelector('a')
link.textContent = "Mozilla Development Network";
link.href="https://developer.mozilla.org"

const sect = document.querySelector("section");
const para = document.createElement("p");
para.innerHTML="We hope you enjoyed the ride"
sect.appendChild(para)

const text = document.createTextNode(
    "- the promise source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
console.log(Document.styleSheets)

para.style.color = "blue";
para.style.background = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.style={}