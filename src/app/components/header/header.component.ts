import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavLinkComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
