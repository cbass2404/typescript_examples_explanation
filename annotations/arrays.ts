const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['silverado']];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
    return car;
});

// Flexible types
const importantDates: (Date | String)[] = [new Date(), '2030-10-10'];
