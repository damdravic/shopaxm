import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-megamenu',
  imports: [],
  templateUrl: './megamenu.component.html',
  styleUrl: './megamenu.component.scss',
})
export class MegamenuComponent {
  @Input() isOpen: boolean = false;
}
