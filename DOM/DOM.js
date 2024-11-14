
/* 
window is a global object.

                                window
                                   |
                                Document
                                   |
                                  HTML
                                 /   \
                              head   body
                              |         |
        ---------------------------     |
        |        |       |        |     |
        meta     meta    title   link   |
                                        |
                            ---------------------------
                            |                          |
                           div                      script
                            |
                            |
                            |
            ---------------------------------
            |         |          |           |
           img        h1         p          div

           
 */

console.dir(window.document) // used to print properties and methods
console.dir(document.body) // Note: if we write the script tag in head then this will have null value
// that's the reason we need to write/ add script tag at the end of the inside body tag.

// alert("Starting JavaScript tutorial!")
// console.log("Hello") // used to print an object as an element
// let heading = document.getElementById("heading")
// console.log(heading) // prints the element

// let headClass = document.getElementsByClassName("heading-class")
// console.log(headClass)

// let para = document.getElementsByTagName("p")
// console.log(para)

// let firstEl = document.querySelector("p") // will return the first matching element
// console.log(firstEl)

// let allEl = document.querySelectorAll("p") // will return all the matching element
// console.log(allEl)

// let firstC = document.querySelector("div").children // return all children list
// console.log(firstC)

// let firstF = document.querySelector("div").firstChild // return only first child
// console.log(firstF)

// let firstL = document.querySelector("div").lastChild // return only last child
// console.log(firstL)

// let firstQ = document.getElementById("fruit-list").innerHTML// return HTML of the Id
// console.log(firstQ)

// let firstQ = document.getElementById("fruit-list").innerText // return only text
// console.log(firstQ)

let pa = document.getElementById("first-para")
pa.innerText = pa.innerText + " in Javascript."
console.log(pa.innerText)

let div = document.querySelector("div")
console.log(div)

let id = div.getAttribute("id")
console.log(id)