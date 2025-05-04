import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CopyrightComponent } from '../../widgets/copyright/copyright.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,CopyrightComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
