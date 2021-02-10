import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCocheEstado]'
})
export class CocheEstadoDirective implements OnInit {

  @Input() appCocheEstado = false;
  @Output() clicked = new EventEmitter<string>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // <i class="fa fa-lock"></i> 
    const icon = this.renderer.createElement('i'); // <i></i>
    this.renderer.addClass(icon, 'fa');
    this.renderer.addClass(icon, this.dameClaseFA());
    this.renderer.setStyle(icon, 'color', this.dameColor());


    this.renderer.listen(icon, 'click', (e) => {      
       this.clicked.emit('Hola que tal');
    });

    this.renderer.appendChild(this.el.nativeElement, icon); // <td><i></i></td>
  }

  private dameClaseFA(): string {
    return this.appCocheEstado ? 'fa-lock' : 'fa-lock-open';
  }

  private dameColor(): string {
    return this.appCocheEstado ? 'red' : 'green';
  }

}
