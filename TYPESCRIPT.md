## A repository containing many examples of how to appropriately use Typescript.

---

_To get started:_

```
$ npm install -dev--save lite-server
```

_To start your live server for seeing updates to index.html and the app.js file use the command (Don't forget to open the console):_

```
$ npm start
```

_To have a file watched and auto compiled on save use:_

```
$ tsc fileName.js -w
```

## tsconfig.json instructions

```
$ tsc --init
```

_To have the entire project watched for changes use:_

```
$ tsc -w
```

> Initialized the tsconfig.json file. Further, you can add 'include', 'exclude', 'files' to customize what you are directing the tsc compiler to handle.

_Example:_

```json
{
    "compilerOptions": {
        "standardKey": "standardValues"
    },
    "exclude": [
        "excluded",
        "**.dev.ts"
        "**/node_modules"
        // node_modules is included by default
    ],
    "include": [
        "app.ts",
        "../folderName"
    ],
    "files": [
        "../component/app.ts"
    ]
}
```

-   The compiler options are many and most can be ignored but some are important to know:

-   Target specifies the type of javascript to compile.

```json
{
    "compilerOptions": {
        "target": "es6"
    }
}
```

-   Lib is an option that lets you specify which library files to include.

```json
{
    "compilerOptions": {
        "lib": ["DOM", "ES6", "DOM.Iterable", "ScriptHost"]
    }
}
```

_Note: the above example is the default if you target es6 for the compiler making typing it out redundant._

-   allowJs and checkJs are used to error check vanilla JS files next to typescript files. you may need to tweak the exclude option to keep it from causing errors between them.

```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true
    }
}
```

-   jsx is used to enable react type typescript files to preserve the integrity of the structure.

```json
{
    "compilerOptions": {
        "jsx": "preserve"
    }
}
```

-   sourceMap is a roadmap of the compiling process

```json
{
    "compilerOptions": {
        "sourceMap": true
    }
}
```

-   outDir and rootDir are used to specify where the source and compiled files are stored. Specifying the rootDir option prevents typescript from compiling files outside of the parameters you specify.

```json
{
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    }
}
```

-   noEmit will make it check your files without compiling them

```json
{
    "compilerOptions": {
        "noEmit": true
    }
}
```

-   downlevelIterantion should only be used if you are using loops and the compiled code behaves like it shouldn't.

```json
{
    "compilerOptions": {
        "downlevelIteration": true
    }
}
```

-   noEmitOnError prevents it from compiling a JS file if there is an error.

```json
{
    "compilerOptions": {
        "noEmitOnError": true
    }
}
```

-   strict sets all strict rules at the same time.

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

-   To compile and run simultaneously run the following command in your terminal:

```
$ ts-node filename.ts
```

## Notes

---

Used to catch errors before run time, you create interfaces that say how items should be structured and it checks your use against that interface:

```javascript
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios
    .get(url)
    .then((res) => {
        const todo = res.data as Todo;

        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        console.log(`
          The Todo with id: ${id}
          Has a title of: ${title}
          Is it completed? ${completed}
        `);
    })
    .catch((err) => {
        console.error(err);
    });
```

To add types to functions do the following:

```javascriptconst logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
          The Todo with id: ${id}
          Has a title of: ${title}
          Is it completed? ${completed}
        `);
};
```

## Syntax + Features vs Design Patterns with TS

---

Types:

-   an easy way to refer to the different properties + functions that a value has
    -   Primitive Types:
        -   string
        -   number
        -   boolean
        -   void
        -   undefined
        -   symbol
        -   null
        -   any
    -   Object Types(can be written to trick ts compiler into believing a value is a different type):
        -   functions
        -   arrays
        -   classes
        -   objects

Why do we care about types?

-   Types are used by the typescript compiler to analyze our code for errors
-   Types allow other engineers to understand what values are flowing around our codebase
-   Types lets it make sure you are using functions that go to that type

When to use types:

-   Everywhere

Type Annotations

-   Code we add to tell typescript what type of value a variable will refer to
-   Done by the developer
-   Use when:
    -   we declare a variable on one line then initialize it later
    -   we want a variable to have a type that can't be inferred
    -   a function returns the 'any' type and we need to clarify the value

```javascript
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number, y: number } = {
    x: 10,
    y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
    console.log(i);
};

// When to use annotations
// Function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// When we declare a variable on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    numberAboveZero = numbers[i];
}

// 3) variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
```

Type Inference

-   Typescript tries to figure out what type of value a variable referes to
-   Typescript tries to guess the type based on the code written
-   If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us
-   Always use it

## Functions

Annotations around functions

-   type annotations for functions
    -   code we add to tell typescript what type of arg a func will receive and what type of values it will return
-   type inference for functions
    -   typescript tries to figure out what type of value a func will return

```javascript
const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    // return null
};

const throwError = (message: string): never => {
    throw new Error(message);
};

const throwError = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }

    return message;
};

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};
```

_typescript will infer the return from a function but not the variables_

_variables will default to any, which should be avoided at all costs_

_void type is for when the function returns no value at all_

_never type is used for when you NEVER expect a function to complete to a return_

## Objects

Annotations around objects and destructuring objects:

```javascript
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

const { age, name }: { age: number, name: string } = profile;
const {
    coords: { lat, lng },
}: { coords: { lat: number, lng: number } } = profile;
```

Typed Arrays

-   arrays where each element is some consistent type of value

```javascript
const carMakers = ['ford', 'toyota', 'chevy']; // infers type by input
const carMakers: string[] = []; // can not infer because nothing in it
```

Why do we care ?

-   ts can do type inference when extracting values

```javascript
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
```

-   ts can prevent us from adding incompatible values from an array

```javascript
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
// prevent incompatible values
carMakers.push(100);
```

-   we can get help with 'map', 'forEach', 'reduce' functions

```javascript
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// help with 'map'
carMakers.map((car: string): string => {
    return car;
});
```

-   flexible arrays can still contain multiple different types

```javascript
// Flexible types
const importantDates: (Date | String)[] = [new Date(), '2030-10-10'];
```

When to use typed arrays

-   any time we need to represent a collection of records with some arbitrary sort order

## Tuples

Overview

-   array-like structure where each element represents some property of a record with a fixed location inside the tuple

Examples

```javascript
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// creates a new tuple structure type
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];
```

_the order of the types tells it to be a tuple with fixed spots for each type_

Why do we care?

-   they aren't really clear on what they mean

```javascript
const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354,
};
```

When to use this?

-   it is usually better to stick with the convention of using objects so the values meaning is clear

## Interfaces

-   interfaces + classes = how to get really strong code reuse in ts
    -   interfaces
        -   creates a new type, describing the property names and value types of an object

```javascript
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
};

// without interface
const printVehicle = (vehicle: {
    name: string,
    year: number,
    broken: boolean,
}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};

// with interface
const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};
```

Syntax

```javascript
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string; // used to tell ts it has a function that returns string
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};
```

_you only have to specify the properties you are using_

```javascript
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
```

_generic names and vague types allow you to reuse interfaces for multiple data structures as seen by the comparison above and below this note_

```javascript
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
```

## Classes

-   blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'

```javascript
class Vehicle {
    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();
```

Basic Inheritance

```javascripclass Car extends Vehicle {
    constructor() {
        super();
    }

    drive(): void { // can overwrite the method of the parent class
        console.log('Vroom');
    }
}

const car = new Car();
car.drive();
car.honk();
```

Instance Method Modifiers

-   public
    -   this method can be called anywhere, any time

```javascript
public drive(): void{
    console.log('vroom')
}
```

-   private
    -   this method can only be called by other methods in 'this' class

```javascript
private drive(): void {
    console.log('vroom')
}
```

-   protected
    -   this method can be called by other methods in 'this' class, or by other methods in child classes

```javascript
protected drive(): void {
    console.log('vroom')
}
```

Fields

```javascript
class Vehicle {
    // color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }
        constructor(public color: string) {} // shorter syntax of above code

    public drive(): void {
        console.log('chugga chugga');
    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
```

-   public allows the variable to be seen anywhere
-   private makes it uncallable outside the class
-   protected makes the variable uncallable outside the class and children

-   fixing the children like below

```javascript
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
```

Why we care?

-   interfaces + classes = how we get really strong code reuse in TS
