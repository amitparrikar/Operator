import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'op-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit {

  //selectedVehicleType:number = 1;
  vehicleType:Array<any> = [];
  vehicleCategory:Array<any> = [];
  vehicleWheelNumber:Array<any> = [];
  vehicleMakers:Array<any> = [];
  pollutionComponents:Array<any> = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.vehicleType = this.commonService.getVehicleTypes();
    this.vehicleCategory = this.commonService.getVehicleCategory();
    this.vehicleWheelNumber = this.commonService.getVehicleNumberOfWheels();
    this.vehicleMakers = this.commonService.getVehicleMakers();
    this.pollutionComponents = this.commonService.getPollutionComponents();

  }

}
