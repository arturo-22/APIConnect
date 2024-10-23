import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VehicleInterface } from '../../interfaces/vehicle.interface';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleDetailsInterface } from '../../interfaces/vehicleDetails.interface';

@Component({
  selector: 'app-vechicle-modal',
  standalone: true,
  imports: [],
  templateUrl: './vechicle-modal.component.html',
  styleUrl: './vechicle-modal.component.css'
})
export class VechicleModalComponent{

  @Input() detail: any;
  @Input() isModalOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  ngOnInit(): void {
    // Imprimir en consola cuando se inicializa el componente
    console.log('Detail on init:', this.detail);
  }


}
