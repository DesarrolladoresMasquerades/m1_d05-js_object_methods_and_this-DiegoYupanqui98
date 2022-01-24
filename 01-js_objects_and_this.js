// Class code examples

// This is a funciton that will be attached to the GLOBAL object,
//therefore the "this" keyword will point to the global object
function sayHelloFloating(){
    return "Salut " + this.firstName;
}

const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello: function sayHello(){
        console.log(this.firstName)
    }
}

//This function is attached to a "person1" object and the "this" keyword
//will refer to the "person1" object.
person1.sayHello()


const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello: function sayHello(){
        console.log(`Buen día, soy ${this.firstName}. I am ${this.age} years old`)
    }
}

console.log(Object.keys(person2))


const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.name}`
    },
    tellAge(){
    return `I am ${this.age} years young`
    }
}

//console.log("abstractPerson", abstractPerson.tellAge())

console.log(abstractPerson.tellAge.bind(person2)())
console.log(sayHelloFloating.bind(person1)())
