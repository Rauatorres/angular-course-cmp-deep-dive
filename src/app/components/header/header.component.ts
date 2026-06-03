import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
