import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor (private viewport: ViewportScroller) {}

 clickScroll(id: string){
  this.viewport.scrollToAnchor(id);
 }
}
