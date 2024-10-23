import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleInterface } from '../../interfaces/vehicle.interface';
import { VechicleModalComponent } from '../vechicle-modal/vechicle-modal.component';
import { Router } from '@angular/router';
import { VehicleDetailsInterface } from '../../interfaces/vehicleDetails.interface';

@Component({
  selector: 'app-vehicle-records',
  standalone: true,
  imports: [VechicleModalComponent],
  templateUrl: './vehicle-records.component.html',
  styleUrl: './vehicle-records.component.css'
})
export class VehicleRecordsComponent implements  OnInit{

  vehicleList: VehicleInterface[] = [];
  vehicleDetails: VehicleDetailsInterface[] = [];
  isModalOpen: boolean = false;


  constructor(private vehicleService: VehicleService, private router: Router){}

  ngOnInit(): void {
    this.getVehicles()
  } 

  getVehicles(){
    this.vehicleService.getVehicles().subscribe({
      next: (result) => {
        this.vehicleList = result.data.rows
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getVehicleId(id: number) {
    this.vehicleService.getVehicles().subscribe({
      next: (result) => {
        const vehicle = result.data.rows.find((item: VehicleInterface) => item.id === id);
        if (vehicle) {
          this.vehicleDetails = vehicle.detalle;
          this.isModalOpen = true; 
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  navigateToDetail(id: number) {
    this.getVehicleId(id);
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
