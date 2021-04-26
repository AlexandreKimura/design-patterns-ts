export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const person1 = new Person('Alexandre', 24);
const address1 = new Address('Av brasil', 3000);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person2.name);
person2.name = 'Alex'; //Troca
console.log(person2.name);
console.log(person2.addresses);
