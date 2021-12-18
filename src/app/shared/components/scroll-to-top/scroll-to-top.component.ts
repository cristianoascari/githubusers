// Angular modules.
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  public scrollTopTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
