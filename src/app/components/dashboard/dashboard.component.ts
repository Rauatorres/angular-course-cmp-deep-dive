import { Component } from '@angular/core';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { TrafficDataService } from '../../services/traffic-data.service';
import { ServerStatusComponent } from './dashboard-item-content/server-status/server-status.component';
import { TrafficComponent } from './dashboard-item-content/traffic/traffic.component';
import { TicketsComponent } from './dashboard-item-content/tickets/tickets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
