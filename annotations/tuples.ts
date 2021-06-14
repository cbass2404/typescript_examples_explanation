const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};
// creates a new tuple structure type
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354,
};
