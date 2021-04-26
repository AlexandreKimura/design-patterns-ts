import { Customer } from '../interfaces/customer';
import { VehicleProtocol } from '../interfaces/vehicle-protocol';

export interface CreateVehicleCustomerProtocol {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
