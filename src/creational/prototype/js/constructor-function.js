//Função construtora
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Alexandre',
  lastName: 'Kimura',
  age: 24,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);

  this.fromSubClass = 'Hello World!';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Alexandre', 'Kimura', 24);
console.log(person1.fullName());

const person2 = new SubPerson('Alexandre1', 'Kimura1', 24);
console.log(person2.fullName());
