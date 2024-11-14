/**
 * Classes - It is a program-code template for creating objects.
 * It's objects will have some state (variables) & some behaviour (functions) inside it.
 */

class Car {
    constructor() {
        console.log("Car Object created");
    }
    start(carModel) {
        console.log(`${carModel} Car started`);
        return `Start Function executed`;
    }

    stop(carModel) {
        console.log(`${carModel} Car stopped`);
        return `Stop Function executed`;
    }
}

module.exports = Car;