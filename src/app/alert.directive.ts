import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[dirAlert]'
})
export class AlertDirective {
  @HostListener('click', ['$event']) onClick(event) {
    alert(event.target + ' was clicked!');
  }

  constructor() {
  }

}
