// let person = {
//     firstName: `Marty`,
//     lastName: `McFly`,
//     age: 17
// }

// console.log(person.firstName)
// console.log(person[`firstName`])

let meal = {
    appetizer: `oysters`,
    entree: `octopus`,
    dessert: `salmon roe`,
    drink: `tea`
}

const {appetizer} = meal

// console.log(appetizer)

const {entree, dessert} = meal


const {drink: myFavoriteDrink} = meal // renamed
// const myFavoriteDrink = meal.drink

let person = {
    firstName: `Marty`,
    lastName: `McFly`,
    age: 17
}

// for (key in person) {
//     console.log(key)
// }

// for (key in person) {
//     console.log(person[key])
// }
// // could not use console.log(person.key), because then it would be looking for something named 'key'

person.vehicle = `toyota sr5`
// console.log(person)

person.parents = [`George`, `Lorraine`]
// console.log(person)

delete person.vehicle
// console.log(person)

class Dog {
    constructor(name, breed, age) {
        this.name = name // 'this' is a keyword, refers to the object that's being created
        this.breed = breed
        this.age = age
    }

    greeting () {
        console.log(`Hi, my name is ${this.name} and I am a(n) ${this.age} year old ${this.breed}.`)
    }
}

let lassie = new Dog(`Lassie`, `Collie`, 18)
// console.log(lassie)
let scoobyDoo = new Dog(`Scooby Doo`, `Great Dane`, 4, [`Daphne`, `Velma`, `Fred`]) // allows more arguments than you need, but will only print what you need
// console.log(scoobyDoo)

// scoobyDoo.greeting()
// lassie.greeting()

class Puppy extends Dog { // 'extends' is a keyword
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age) // lets you inherit this.name and this.breed from the constructor in the Dog class

        this.trainingLevel = trainingLevel
    }

    levelUp(num) {
        this.trainingLevel += num
    }
}

let scrappyDoo = new Puppy(`Scrappy Doo`, `Great Dane`, 1, 0)

scrappyDoo.levelUp(0.5)
scrappyDoo.levelUp(2)
console.log(scrappyDoo)

console.log(scoobyDoo)
// scoobyDoo.levelUp(10) // this won't work because the parent can't see the child fxn, but child fxns can see parent fxns
scrappyDoo.greeting() // child fxns can see parent fxns

