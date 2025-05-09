import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from "../../widgets/search/search.component";
import { RightOptionsComponent } from "../../widgets/right-options/right-options.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, SearchComponent, RightOptionsComponent],

})
export class HeaderComponent {

  @Output() toogleMegaMenu = new EventEmitter<boolean>();
  
  show = false;

  onToggle() {
    this.show = !this.show;
    this.toogleMegaMenu.emit(this.show);
 }


}
