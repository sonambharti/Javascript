// Promises
/** 
 * Promise is for "eventual" completion of task. It is an object in JS.
 * A promise is a result object that is used to handle asynchronous operations.
 * It represents a value that may not be available yet, but will be resolved at some point in the future.
 * A promise can be in one of three states: pending, fulfilled, or rejected.
 * Pending: The promise has not yet been resolved or rejected.
 * Fulfilled: The promise has been resolved and the value is available.
 * Rejected:  The promise has been rejected and the reason is available.
 * 
 * Syntax: let promise = new Promise((resolve, reject) => {...})
 * 
 * Note: It is a solution to callback hell.
*/

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data: ${dataId}`);
            resolve("success");
            // reject("error");
        },4000);
    })
}

// let res = getData(23);
// res.then((data) => {
//     console.log(data);
// });
 

// getData(12).then((res) => {
//     console.log(res);
//     getData(21).then((res) => {
//         console.log(res);
//     });
// });


// Promise Chain
getData(12).then((res) => {
    return getData(21);
}).then((res) => {
console.log(res);
});

 
// Use promise to get data 2 will execute after data 1 with delay of 4 sec and data 3 will excute after data 2  with 4 sec delay, and so on....
// function asynFunc1() {
//     return new Promise ((reolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             reolve("Success");
//         }, 1000);
//     })
// }



// function asynFunc2() {
//     return new Promise ((reolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             reolve("Success");
//         }, 1000);
//     })
// }

// console.log("Fetching data 1...");
// asynFunc1().then(() => {
//     console.log("Fetching data 2...");
//     asynFunc2().then((res) => {});
// });
