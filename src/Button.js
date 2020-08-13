

class Button {

    constructor() {
        this.count = 0; //instance variable
    }

    counter(){
        this.count++; //increment count by 1 when its called
        console.log(`Current count: ${this.count}`); // print out value of count when count() is called
    }

}


// create some button objs


let button1 = new Button();
let button2 = new Button();

button1.counter();
button1.counter();
button1.counter();

button2.counter();
button2.counter();
button2.counter();
button2.counter();
button2.counter();
button2.counter();
