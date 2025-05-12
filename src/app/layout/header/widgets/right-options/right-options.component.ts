import { Component } from '@angular/core';
import { AuthDropdownComponent } from '../auth-dropdown/auth-dropdown.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-right-options',
  imports: [CommonModule , AuthDropdownComponent,RouterModule],
  templateUrl: './right-options.component.html',
  styleUrl: './right-options.component.scss'
})
export class RightOptionsComponent {

  authDropdownVisibility : boolean = false;




}
