class Bike {
    constructor(price, max_speed){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Total Miles: ${this.miles}`)
    }

    drive() {
        console.log(`Driving... Total Miles: ${this.miles+=10}`);
    }

    reverse() {
        /* let max_speed = this.miles  */
        if(this.miles  <= 0) {
            console.log(`Reversing... Total Miles: ${this.miles=0}`);
        }
        else {
            console.log(`Reversing... Total Miles: ${this.miles-=5}`);
        }

    }
}

const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(300, "30mph");
const bike3 = new Bike(400, "35mph");

bike1.drive();
bike1.drive();
bike1.drive();
bike1.reverse();
bike1.displayInfo();

bike2.drive();
bike2.drive();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();

bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();


