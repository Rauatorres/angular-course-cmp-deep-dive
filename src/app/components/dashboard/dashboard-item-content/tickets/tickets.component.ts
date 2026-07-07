import { Component } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Ticket } from '../../../../models/ticket.model';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  add(newTicketData: { title: string; ticketText: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: newTicketData.title,
      request: newTicketData.ticketText,
      status: 'open',
    };
    this.tickets.push(newTicket);
    console.log(this.tickets);
  }

  completeTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id == ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
