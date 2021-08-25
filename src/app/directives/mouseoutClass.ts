import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[mouseout-class]'
})
export class MouseoutClassDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('mouseout-class') mouseoutClass:any;  

  @HostListener('mouseenter') onMouseEnter() {
    console.log("ENTERED")
    this.elementRef.nativeElement.classList.add(this.mouseoutClass);
 }

}
