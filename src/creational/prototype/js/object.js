const personPrototype = {
  firstName: 'Alexandre',
  lastName: 'Kimura',
  age: 24,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

//Parece herança, mas não é
const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.fullName());
