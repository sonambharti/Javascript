// Sync in JS
/**
 * Synchronous means the code runs in a particular sequence of instructions given in the program.
 * Each instruction waits for the previous instruction to complete its execution.
 */
// function syncInJs() {
//     console.log("World");
// };
// console.log("Hello");
// setTimeout(syncInJs, 4000); // Output: Hello, World

// Async in JS
/**
 * Due to synchronous programing, sometimes imp instructions get blocked due to some previous, which
 * causes a delay in the UI. Asynchronous code execution allows to execute next instructions 
 * immediately and doesn't block the code/
 */

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

// getWeatherData()

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data: ${dataId}`);
            resolve("success");
            // reject("error");
        },4000);
    });
};

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// getAllData()

// IIFE: Immediately Invoked Function Expression -These are method to immediately call a function as soon as it is defined.
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();