
// const eat = (food) => {    
//     console.log(this);
//     // console.log(`${this.userName} eat ${food} with pleasure`);
// };

// const eat = function (food) {    
//     console.log(this);
//     // console.log(`${this.userName} eat ${food} with pleasure`);
// };


// const person = {
//     userName: 'John',
//     age: 23,
//     adress: {},
//     height: 23,
//     eat: eat
// };

// const person2 = {
//     userName: 'Bolt',
//     age: 30,
//     adress: {},
//     height: 23,
//     eat
// };

// person.eat('karton');
// person2.eat('plastic');











// function foo () {
//     console.log(arguments)
// }

// const bar = () => {
//      console.log(arguments)
// };



// foo(1,2,3)


// get set settimeout prototype 



// const person = {
//     userName: 'John',
//     age: 23,
//     foo: function () {

//         function test () {
//             console.log(`${this.userName} runs`);
//         }
        
//         test();
//     }
// };

// person.foo();



// 'use strict';

// function run (destination, speed) {
//     console.log(`${this.userName} runs to ${destination} with ${speed} speed`);
// }

// const person = {
//     userName: 'John',
//     run
// };

// const dog = {
//     userName: 'Bobik',
// };

// person.run.apply(dog, ['school', 10]);

// run.call(dog);

// run.myBind = function (that, ...args) { // ['bar']
//     return (...otherArgs) => // [56, 1,2,3]
//         // this.apply(that, [...args, ...otherArgs]);
//         this.call(that, ...args, ...otherArgs);
// };

// const dogRun = run.myBind(dog, 'bar');
// dogRun(56, 1,2,3);



// Дан массив людей

// [
//     {name: 'John', age: 23}, {name: 'David', age: 51}
// ]

// Добавить каждому объекту из этого массива метод .sayHello()
// который будет выводить в консоль сообщение "Hello i am NAME and i am AGE years old"

// есть СОБАКА 

// const dog = {
//     name: 'Bobik',
//     age: 1
// }

// Собака не умеет говорить но один разочек,
// одному человеку показалось что она что то сказала
// запусите метод .sayHello() одно из людей в контексте СОБАКИ

const people = [
    {name: 'John', age: 23}, 
    {name: 'David', age: 51}
];

const dog = {
    name: 'Bobik',
    age: 1
};

function sayHello () {
    console.log(`Hello i am ${this.name} and im ${this.age} years old!`);
}

people.forEach((person) => {
    person.sayHello = sayHello;
});

// people[1].sayHello();
// people[0].sayHello.call(dog);

console.log( people[0].sayHello === people[1].sayHello );