// Class code examples

// This is a funciton that will be attached to the GLOBAL object,
//therefore the "this" keyword will point to the global object
function sayHelloFloating(){
    console.log("this object of a floating function", this)
    console.log("this.firstName", this.firstName)
}

sayHelloFloating()


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

person2.sayHello()
