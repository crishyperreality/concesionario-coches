import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCocheEstado]'
})
export class CocheEstadoDirective implements OnInit {

  @Input() appCocheEstado = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // <i class="fa fa-lock"></i> 
    const icon = this.renderer.createElement('i'); // <i></i>

    // if (this.appCocheEstado) {
    //   this.renderer.addClass(icon, 'fa-lock');
    //   this.renderer.setStyle(icon, 'color', 'red');
    // } else {
    //   this.renderer.addClass(icon, 'fa-lock-open');
    //   this.renderer.setStyle(icon, 'color', 'green');
    // }

    this.renderer.addClass(icon, 'fa');
    this.renderer.addClass(icon, this.dameClaseFA());
    this.renderer.setStyle(icon, 'color', this.dameColor());

    this.renderer.appendChild(this.el.nativeElement, icon); // <td><i></i></td>
  }

  private dameClaseFA(): string {
    return this.appCocheEstado ? 'fa-lock' : 'fa-lock-open';
  }

  private dameColor(): string {
    return this.appCocheEstado ? 'red' : 'green';
  }

}
