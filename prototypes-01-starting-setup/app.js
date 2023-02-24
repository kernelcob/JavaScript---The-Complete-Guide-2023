class AgedPerson {
  printAge() {
    console.log(this.age)
  }
}

class Person extends AgedPerson{
   name = 'Max';

   constructor() {
     super();
     this.age = 30;
   }

   greet() {
      console.log(
         'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
      );
   }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet= function() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//    );
//   }
// }

// Person.describe = function() {
//   console.log('creating persons...')
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

// Person.prototype.printAge = function() {
// console.log(this.age)
// }

// console.dir(Person)

// const perso = new Person();
// perso.greet();
// perso.printAge();
// console.log(perso.length)
// console.log(perso.toString())
// const perso2 = new perso.__proto__.constructor();
// console.dir(Object.prototype.__proto__)

const p = new Person();
console.log(p)