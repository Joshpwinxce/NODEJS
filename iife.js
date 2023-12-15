const add = require('./add');

(function(message){
    const superHero = 'Batman';
    console.log (message,superHero);
})('hello');

//Immediately Invoke function Expression 

(function(message){
    const superHero = 'Superman';
    console.log(message,superHero);
})('Hi');

const sum = add (2,1);
console.log(sum);
