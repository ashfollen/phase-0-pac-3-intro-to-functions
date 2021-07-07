function doNothing() {}

function sayHello() {
    console.log('Hello!');
}

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
    console.log("Hello, Brendan!")
}

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

function say(greeting, firstName) {
    console.log("firstName:", firstName);
    console.log("greeting:", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

function add(x, y) {
    return x + y;
}

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));
