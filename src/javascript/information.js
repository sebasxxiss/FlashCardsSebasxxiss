const javascriptFlashcards = [
    {
      question: "What is JavaScript and how does it differ from Java?",
      answer: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language primarily used for adding interactivity to web pages. It differs from Java in that Java is a statically typed, compiled language often used for backend or standalone applications, while JavaScript is dynamically typed and primarily used for front-end web development."
    },
    {
      question: "What is the difference between undefined and null in JavaScript?",
      answer: "undefined means a variable has been declared but not assigned a value, while null is an assignment value representing 'no value' or 'empty.' undefined is a type itself, whereas null is an object."
    },
    {
      question: "What are JavaScript data types?",
      answer: "JavaScript has the following data types: Primitive: String, Number, Boolean, Undefined, Null, Symbol, BigInt. Non-primitive: Object, which includes Array, Function, Date, etc."
    },
    {
      question: "What is hoisting in JavaScript?",
      answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the scope (script or function). For example, variables declared with var are hoisted but not initialized, while let and const declarations are hoisted but remain in a temporal dead zone until initialized."
    },
    {
      question: "What are closures in JavaScript?",
      answer: "A closure is a function that 'remembers' the variables from its outer scope even after that scope has exited. This happens because inner functions retain access to the variables of their outer functions."
    },
    {
      question: "Explain the difference between let, const, and var.",
      answer: "var is function-scoped, can be redeclared, and is hoisted with undefined initialization. let is block-scoped, cannot be redeclared in the same scope, hoisted but remains in a temporal dead zone. const is block-scoped, requires an initial value, cannot be reassigned, and is hoisted in a temporal dead zone."
    },
    {
      question: "What are JavaScript promises?",
      answer: "Promises are objects used to handle asynchronous operations. They can be in one of three states: pending, fulfilled, or rejected. A promise can resolve with a value (success) or reject with an error."
    },
    {
      question: "What is the difference between == and ===?",
      answer: "== checks for value equality with type coercion (e.g., 5 == '5' returns true), while === checks for both value and type equality (e.g., 5 === '5' returns false)."
    },
    {
      question: "What is an arrow function?",
      answer: "Arrow functions are a concise syntax for writing functions. They do not have their own this, so the this value is lexically inherited from the surrounding code."
    },
    {
      question: "What is the event loop in JavaScript?",
      answer: "The event loop is a mechanism that handles and executes multiple tasks asynchronously in JavaScript. It ensures that non-blocking I/O and callbacks are executed after the main code has finished running."
    },
    {
      question: "What are template literals in JavaScript?",
      answer: "Template literals allow embedding expressions and multi-line strings using backticks (`)."
    },
    {
      question: "What is this in JavaScript?",
      answer: "The this keyword refers to the object that is currently executing the function. Its value depends on how the function is called."
    },
    {
      question: "What is the difference between call(), apply(), and bind()?",
      answer: "call() invokes a function with a given this value and arguments passed individually. apply() is similar but arguments are passed as an array. bind() creates a new function with a specified this value but does not invoke it immediately."
    },
    {
      question: "What is an IIFE in JavaScript?",
      answer: "An Immediately Invoked Function Expression (IIFE) is a function that is executed as soon as it is defined."
    },
    {
      question: "What is destructuring in JavaScript?",
      answer: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables."
    },
    {
      question: "What are JavaScript modules?",
      answer: "JavaScript modules are files that export code (variables, functions, objects) for use in other files. They are imported using import and exported using export."
    },
    {
      question: "What is NaN in JavaScript?",
      answer: "NaN stands for 'Not-a-Number.' It is a special value that represents an invalid or unrepresentable number."
    },
    {
      question: "How can you handle errors in JavaScript?",
      answer: "Errors in JavaScript can be handled using try...catch."
    },
    {
      question: "What are JavaScript events?",
      answer: "Events are actions or occurrences (e.g., clicking a button) that can be detected by JavaScript to trigger specific functionality."
    },
    {
      question: "What is the difference between map(), filter(), and reduce() in JavaScript?",
      answer: "map() transforms each element in an array and returns a new array. filter() filters elements based on a condition and returns a new array. reduce() reduces an array to a single value by applying a callback function."
    }
  ];
  
  export default javascriptFlashcards