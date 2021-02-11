import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  appHighlightDefault = 'yellow';

  @Input() appHighlight;
  @Input() color = 'black';
  @Input() size: string;

  fontSize = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  elRatonEntra(): void {

    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight);  
    } else{
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlightDefault);
    }

    // this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight || this.appHighlightDefault); 

    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', this.size);
  }

  @HostListener('mouseleave')
  elRatonSale(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', null);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
  }

  ngOnInit(): void {
    this.fontSize = this.el.nativeElement.style.fontSize;
    // this.el.nativeElement.style.fontSize;

    // this.el.nativeElement.querySelectorAll('span').forEach(element => {
    //   this.renderer.listen(element, 'mouseenter', () => {
    //     this.renderer.setStyle(element, 'background-color', 'yellow');
    //   });

    //   this.renderer.listen(element, 'mouseleave', () => {
    //     this.renderer.setStyle(element, 'background-color', null);
    //   });
    // });

    // document.querySelectorAll('#container-div p').forEach((element: HTMLSpanElement) => {
    //   element.addEventListener('mouseenter', (e) => {
    //     element.style.color = 'yellow';
    //   })

    //   element.addEventListener('mouseleave', (e) => {
    //     element.style.color = null;
    //   })
    // });

  }

}
