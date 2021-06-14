class Vehicle {
    constructor(public color: string) {}

    public drive(): void {
        console.log('chugga chugga');
    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');

vehicle.drive();

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    public drive(): void {
        // can overwrite the method of the parent class but modifier type 'private' 'public' 'protected' must match
        console.log('Vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'orange');
car.drive();
