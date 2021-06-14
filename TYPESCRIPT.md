### A repository containing many examples of how to appropriately use Typescript.

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

### tsconfig.json instructions

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

### Syntax + Features vs Design Patterns with TS

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
