import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightAvanzado]'
})
export class HighlightAvanzadoDirective {

  span: HTMLSpanElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  paquitoEntra(): void {
    this.span = this.renderer.createElement('span');
    this.span.textContent = 'Estoy sobre el elemento con la directiva [appHighlightAvanzado]';
    this.renderer.appendChild(this.el.nativeElement, this.span);
  }

  @HostListener('mouseleave')
  paquitoSeVa(): void {
    this.renderer.removeChild(this.el.nativeElement, this.span)
  }

}
