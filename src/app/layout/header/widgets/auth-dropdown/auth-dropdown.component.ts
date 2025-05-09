import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-dropdown',
  imports: [CommonModule],
  templateUrl: './auth-dropdown.component.html',
  styleUrl: './auth-dropdown.component.scss'
})
export class AuthDropdownComponent {

  @Input() isOpen: boolean = false;

}
