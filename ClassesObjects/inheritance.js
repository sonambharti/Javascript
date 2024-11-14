class Parent{
    constructor(){
        console.log(`Invoking Parent constructor`);
    }
    hello() {
        console.log(`Hello, I'm parent`);
    }
    work() {
        console.log('I am working');
    }
}

class Child extends Parent {
    constructor(place) {
        super()
        this.place = place;
    }
    hello() {
        // super.hello();
        console.log(`Hello, I'm child from ${this.place}`);
    }
    play() {
        console.log('I am playing');
    }
}

obj = new Child("Patna");
obj.hello(); // Outputs: Hello, I'm child
// obj.super.hello()// Outputs: Hello, I'm Parent
