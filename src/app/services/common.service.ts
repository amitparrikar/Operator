import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getVehicleTypes() {
    return [
      {id: 1, name: 'Petrol'},
      {id: 2, name: 'Diesel'},
      {id: 3, name: 'CNG'}
    ];
  }

  getVehicleCategory() {
    return [
      {id: 1, name: 'MCWTG', description: 'Motorcycle Without Gear'},
      {id: 2, name: 'MCWG', description: 'Motorcycle With Gear'},
      {id: 3, name: 'LMV', description: 'Light Motor Vehicle'},
      {id: 4, name: 'HMV', description: 'Heavy Motor Vehicle'},
      {id: 5, name: 'GMV', description: 'Goods Motor Vehicle'}
    ];
  }

  getVehicleNumberOfWheels() {
    return [
      {id: 1, name: '2 Wheeler'},
      {id: 2, name: '3 Wheeler'},
      {id: 3, name: '4 Wheeler'},
      {id: 4, name: '6 Wheeler'},
      {id: 5, name: '8 Wheeler'},
      {id: 6, name: '10 Wheeler'}
    ];
  }

  getVehicleMakers() {
    return [
      {id: 1, name: 'Ford'},
      {id: 2, name: 'MarutiSuzuki'},
      {id: 3, name: 'Hyundai'},
      {id: 4, name: 'Volkswagon'},
      {id: 5, name: 'Mahindra'},
      {id: 6, name: 'Hero Honda'},
      {id: 7, name: 'Honda'},
      {id: 8, name: 'Royal Enfield'},
      {id: 9, name: 'Bajaj'}
    ];
  }

  getPollutionComponents() {
    return [
      {id: 1, name: 'Component 1', description: 'This component measures bla bla'},
      {id: 2, name: 'Component 2', description: 'This component measures bla bla'},
      {id: 3, name: 'Component 3', description: 'This component measures bla bla'},
      {id: 4, name: 'Component 4', description: 'This component measures bla bla'},
      {id: 5, name: 'Component 5', description: 'This component measures bla bla'},
      {id: 6, name: 'Component 6', description: 'This component measures bla bla'},
      {id: 7, name: 'Component 7', description: 'This component measures bla bla'},
    ];
  }

}
