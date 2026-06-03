import { Component } from '@angular/core';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { TrafficDataService } from '../../services/traffic-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private trafficDataService: TrafficDataService) {}

  dummyTrafficData = this.trafficDataService.dummyTrafficData();
  maxTraffic = this.trafficDataService.getMaxTraffic();
  currentStatus = 'online';
}
