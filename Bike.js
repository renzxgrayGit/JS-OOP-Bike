class Bike {
    constructor(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: ${this.price}, Maximum Speed: ${this.max_speed}, Total Miles: ${this.miles}`);
        /* console.log("Price: " + this.price + ", Maximum Speed: " + this.max_speed + ", Total Miles: " + this.miles); */
    }

    drive() {
        console.log("Driving");
        this.miles += 10;
    }

    reverse() {
        console.log("Reversing");
        if (this.miles >= 5) {
            this.miles -= 5;
        } else {
            this.miles = 0;
        }
    }
}

/* Create instances of Bike */
const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(300, "30mph");
const bike3 = new Bike(400, "35mph");

/* Actions for bike1 */
bike1.drive();
bike1.drive();
bike1.drive();
bike1.reverse();
bike1.displayInfo();

/* Actions for bike2 */
bike2.drive();
bike2.drive();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();

/* Actions for bike3 */
bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();
