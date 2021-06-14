// interface Vehicle {
//     summary(): string;
// }

// const oldCivic = {
//     name: 'civic',
//     year: new Date(),
//     broken: true,
//     summary(): string {
//         return `Name: ${this.name}`;
//     },
// };

// const printVehicle = (vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }): void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken? ${vehicle.broken}`)
// };

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

// interface Reportable {
//     summary(): string;
// }

// const oldCivic = {
//     name: 'civic',
//     year: new Date(),
//     broken: true,
//     summary(): string {
//         return `Name: ${this.name}`;
//     },
// };

interface Reportable {
    summary(): string;
}

const drink = {
    color: 'brown',
    carbonated: true,
    super: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(drink);
