import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleRecordsComponent } from './components/vehicle-records/vehicle-records.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehicleRecordsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APIConnect';
}
