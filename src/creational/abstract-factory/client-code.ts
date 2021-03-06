import { EnterpriseVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseVehicleCustomerFactory();
const individualFactory = new IndividualVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'Alexandre');
const car2 = individualFactory.createVehicle('Hb20', 'Alex');

car1.pickUp();
car2.pickUp();
