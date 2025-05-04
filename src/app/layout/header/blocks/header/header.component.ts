import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from "../../widgets/search/search.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [SearchComponent],

})
export class HeaderComponent {

  @Output() toogleMegaMenu = new EventEmitter<boolean>();
  
  show = false;

  onToggle() {
    this.show = !this.show;
    this.toogleMegaMenu.emit(this.show);
 }


}
