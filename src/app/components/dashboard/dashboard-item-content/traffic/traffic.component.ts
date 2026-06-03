import { Component } from '@angular/core';
import { TrafficDataService } from '../../../../services/traffic-data.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  constructor(private trafficDataService: TrafficDataService) {}

  dummyTrafficData = this.trafficDataService.dummyTrafficData();
  maxTraffic = this.trafficDataService.getMaxTraffic();
}
