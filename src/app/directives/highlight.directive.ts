import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  //whenever you want use this directive you have to use this selector!
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, 
    private renderer:Renderer2) { 

    }

    //I use this directive to handle on mouse over (enter/leave)
    //by adding and removing css classes
    @HostListener('mouseenter') onmouseenter(){
      this.renderer.addClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('mouseleave') onmouseleave(){
      this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }
}
