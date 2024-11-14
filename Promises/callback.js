// Callbacks and Callback Hell
/**
 * A callback is a function as an argument to another function.
 *  It is used to perform a specific action when a certain event occurs.
 * 
 * Callback Hell - Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
 * This style of programming becomes difficult to understand and manage.
 */

function getData(dataId, getNextData){ // getNextData is a callback function
    setTimeout(() => {
        console.log(`data: ${dataId}`);
        if(getNextData){
            getNextData();
        }
    },4000);

}

// This ll execute all data 1,2,3 immediately.
// getData(1)
// getData(2)
// getData(3)


// This callback will ensure that data 2 will execute after data 1 with delay of 4 sec and data 3 will excute after data 2  with 4 sec delay, and so on....
getData(1, () => {
    console.log('getting data 2...')
    getData(2, () => {
        console.log('getting data 3...')
        getData(3, () => {
            console.log('getting data 4...')
            getData(4);
        });
    });
});
// Above code is an example of callback hell. It is difficult to understand and manage.
// It is better to use promises or async/await to avoid this style of programming.
// Callback Hell is a pyramid of doom.


