import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlComponent } from '../../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  addTicket = output<{ title: string; ticketText: string }>();

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.addTicket.emit({ title: title, ticketText: ticketText });
    this.form().nativeElement.reset();
  }
}
