import {Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('dirHighlight') highlightColor = 'yellow';
  private backgroundColor: string;


  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
