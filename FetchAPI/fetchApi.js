const btn = document.querySelector("#btn");
const para = document.querySelector("#fact");

const URL = "https://dog.ceo/api/breeds/image/random";
// const URL = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en`

const getFacts = async () => {
    console.log("Getting data...")
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json();
    console.log(data);
    para.innerText = data.text;
    return data;
}

btn.addEventListener("click", () => {
    getFacts();

})


// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://google-search72.p.rapidapi.com/search?q=word%20cup&lr=en-US&num=10');
// xhr.setRequestHeader('x-rapidapi-key', '98c74222e5msh0157d537e59bb7fp11bdd0jsnbaa7b60dbd5f');
// xhr.setRequestHeader('x-rapidapi-host', 'google-search72.p.rapidapi.com');

// xhr.send(data);