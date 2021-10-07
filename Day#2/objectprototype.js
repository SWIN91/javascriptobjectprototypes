class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        return `${this.name} is ${this.age}`
    }
}
let folks= new Person('Bijuu Mike', 29)
console.log(folks);
// http://blacknegative.com/#!/home/