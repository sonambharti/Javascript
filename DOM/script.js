let div = document.querySelector("div");
div.style.backgroundColor = "pink";
div.style.color = "green";

/** Adding new elements to the web page */
let newBtn = document.createElement("button"); // creating a new element button to add
// div.append(newBtn); // adding button at the end of div
// div.prepend(newBtn); // adding button at the start of div
// div.before(newBtn); // adding button before the div
div.after(newBtn); // adding button after the div
newBtn.textContent = "Click me"; // adding text to the button
newBtn.style.backgroundColor = "blue";
newBtn.style.color = "white";
newBtn.style.padding = "10px";
newBtn.style.borderRadius = "10px";
newBtn.style.cursor = "pointer";
newBtn.style.fontSize = "20px";
newBtn.style.fontWeight = "bold";
newBtn.style.textAlign = "center";
newBtn.onclick = function(){
    alert("Button clicked!");
}

let newHead = document.createElement("h1");
newHead.innerHTML = '<h1>Welcome!!!</h1>'
// newHead.innerText = "Welcome!!!";
div.before(newHead);


/** Deleting an atribute from the html page */
par = document.querySelector('p');
par.remove();

/** Use the classlist API to add and remove the classes */
div.classList.add("class1", "class2");
div.classList.remove("class1"); 
div.classList.toggle("class3");
div.classList.contains("class2"); // returns true or false
