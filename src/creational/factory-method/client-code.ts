import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumber } from './utils/random-numbers';

/*const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Alexandre');
fusca.stop();*/

const carFactory = new CarFactory();
const customerName = ['Alexandre', 'Alex', 'Alê', 'Alexx'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerName[randomNumber(customerName.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO ${randomNumber(100)}`);
  newCar.stop();
  //console.log(vehicle);
}
