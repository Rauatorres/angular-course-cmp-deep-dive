import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../../models/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  isVisible = signal(false);
  close = output();

  onToggleDetails() {
    this.isVisible.set(!this.isVisible());
  }

  onClose() {
    this.close.emit();
  }
}
