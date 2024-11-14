btn2 = document.querySelector("#btn2");

// Note: JS code has more priority than inline script code
btn2.ondblclick = (evt) => {
    console.log(evt)
    console.log("Event type: ", evt.type);
    alert("Button 2 double clicked");
}

div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log("Event type: ", evt.type);
    div.style.backgroundColor = "blue";
}
div.onmouseout = (evt) => {
    console.log(evt);
    console.log("Event type: ", evt.type);
    div.style.backgroundColor = "aquamarine";
}

btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', () => {
    console.log("Event handler callback is trigerred...")
    // alert('clicked btn 3')
})
// Note: We can add multiple event listener on one element.
btn3.addEventListener('click', () => {
    console.log("2nd Event handler callback is trigerred...")
    
})
const handler3 = () => {
    console.log("3rd Event handler callback is trigerred...")
}
btn3.addEventListener('click', handler3);

btn3.addEventListener('click', () => {
    console.log("4th Event handler callback is trigerred...")
    
})

// Note: We can remove event listener using removeEventListener method
// Note: the reference of callback function should be same to remove.
btn3.removeEventListener('click', handler3);

let modebtn = document.querySelector("#mode-btn");
let currMode = "dark"
modebtn.addEventListener('click', () => {
    if (currMode === "light"){
        document.querySelector("body").style.backgroundColor = "black";
        // modebtn.style.backgroundColor = "white";
        // modebtn.style.color = "black";
        currMode = "dark"
        modebtn.innerText = currMode
        console.log(currMode);
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        // modebtn.style.backgroundColor = "black";
        // modebtn.style.color = "white";
        currMode = "light"
        modebtn.innerText = currMode
        console.log(currMode);
    }
});