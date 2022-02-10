# TypeScript

### Main Principle

TypeScript is a typed superset of JavaScript, and eventually it's compiled into plain JavaScript code. The programmer is even able to decide the version of the generated code, as long as it's ECMAScript 3 or newer. TypeScript being a superset of JavaScript means that it includes all the features of JavaScript and its own additional features as well. In other words, all existing JavaScript code is actually valid TypeScript.

TypeScript consists of three separate, but mutually fulfilling parts:
1. The language
    +   The language consists of syntax, keywords and type annotations. The syntax is similar to but not the same as JavaScript syntax. From the three parts of TypeScript, programmers have the most direct contact with the language.
2. The compiler
    + The compiler is responsible for type information erasure (i.e. removing the typing information) and the code transformations. The code transformations enable TypeScript code to be transpiled into executable JavaScript. Everything related to the types is removed at compile-time, so TypeScript isn't actually genuine statically-typed code.
    + Traditionally, compiling means that code is transformed from a human-readable format to a machine-readable format. In TypeScript, human-readable source code is transformed into another human-readable source code, so the correct term would actually be transpiling. However, compiling has been the most commonly-used term in this context, so we will continue to use it.
    + The compiler also performs a static code analysis. It can emit warnings or errors if it finds a reason to do so, and it can be set to perform additional tasks such as combining the generated code into a single file.
3. The language service
    + The language service collects type information from the source code. Development tools can use the type information for providing intellisense, type hints and possible refactoring alternatives.

### TypeScript key language features


##### Type annotations
Type annotations in TypeScript are a lightweight way to record the intended contract of a function or a variable. In the example below, we have defined a birthdayGreeter function which accepts two arguments: one of type string and one of type number. The function will return a string.
```
const birthdayGreeter = (name: string, age: number): string => {
  return `Happy birthday ${name}, you are now ${age} years old!`;
};
const birthdayHero = "Jane User";
const age = 22;
console.log(birthdayGreeter(birthdayHero, 22));
```
##### Structural typing
TypeScript is a structurally-typed language. In structural typing, two elements are considered to be compatible with one another if, for each feature within the type of the first element, a corresponding and identical feature exists within the type of the second element. Two types are considered to be identical if they are compatible with each other.

##### Type inference
The TypeScript compiler can attempt to infer the type information if no type has been specified. Variables' type can be inferred based on its assigned value and its usage. The type inference take place when initializing variables and members, setting parameter default values, and determining function return types.

For example, consider the function add:
```
const add = (a: number, b: number) => {
  /* The return value is used to determine
     the return type of the function */
  return a + b;
}
```
The function's return value is inferred by retracing the code back to the return expression. The return expression performs an addition of the parameters a and b. We can see that a and b are numbers based on their types. Thus, we can infer the return value to be of type number.
As a more complex example, let's consider the code below. If you have not used TypeScript before, this example might be a bit complex. But do not worry, you can safely skip it for now.
