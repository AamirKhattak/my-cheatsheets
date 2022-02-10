// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let amount = 25;
let power = Math.pow(2, 3);
let uppercaseName = 'aamir khattak'.toUpperCase();
/*
amount = 'asd' // will generate error
power = 'as' // will generate error
uppercaseName = 2; // will generate error
//because type(Typing) is infered from assigned value
*/


// Functions 
const birthdayGreeter = (name: string, age: number): string => {
  return `Happy birthday ${name}, you are now ${age} years old!`;
};

const birthdayHero = "Jane User";
const age = 22;

console.log(birthdayGreeter(birthdayHero, 22));

// type inference
const add = (a: number, b: number) => {
  /* The return value is used to determine
     the return type of the function */
  return a + b;
}

