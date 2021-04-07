// Objects

 /*
syntax: 
    {
       k1: v1,
       k2: v2 
    }

keys can be in "" but don't have to be if they are valid var names, i.e. they don't start with a "number" or have invalid chars or has spaces
 */

let obj1 = {
    name: "Justin"
}

let obj2 = {
    "name": "Amit"
}

// There are two ways to get things out of objects. "Dot" notation and
// "square bracket" notation.

console.log(obj1.name);
console.log(obj1["name"]);

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: [{name:"Amy"}, {name: "Josh"}] 
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[1]) // obj can hold more than just primitive types
console.log(car.owners[0].name)

let person = {
    fName: "Justin",
    lName: "Ahmann",
    age: 28,
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fullName())

console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))

// This demo shows we can add new keys through assignment
let builderObj = {} // an empty obj
console.log(builderObj)
builderObj.name = "Justin"
builderObj["age"] = 28
builderObj.Obj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj)
console.log(builderObj.greet("Hello"))


// A look ahead STACKS and QUEUES <= we can build these with objects
// Stacks are LIFO (last in first out)
// Queues are FIFO (first in first out)

// A look ahead at "classes", special type of way to build an obj
// oop object oriented programming
let spot = {
    breed: "Rottweiler",
    age: 3,
    bark: function(){
        return 'The ' + this.breed + ' Barks!'
    }

}
console.log(spot.bark())

class Dog {
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
    bark = function(){
        return 'The ' + this.breed + ' Barks!'
    } 
}
let fido = new Dog("lab", 10)
let lucky = new Dog("corgi", 12)
console.log(fido.breed)
console.log(lucky.breed0)
let dogs = [new Dog("lab", 25), new Dog("corgi", 25)]
dogs.forEach(dog =>(dog.bark()))
console.log(fido.breed)
// console.log(fido.bark())
