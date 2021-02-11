import {
  Directive, ElementRef, EventEmitter, Input,
  OnChanges, OnInit, Output, Renderer2, SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appCocheEstado]'
})
export class CocheEstadoDirective implements OnInit, OnChanges {

  @Input() appCocheEstado = false;
  @Output() clicked = new EventEmitter<string>();

  icon: HTMLElement; // undefined

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // console.log('2')
    // // <i class="fa fa-lock"></i> 
    // this.icon = this.renderer.createElement('i'); // <i></i>
    // this.renderer.addClass(this.icon, 'fa');
    // this.renderer.addClass(this.icon, this.dameClaseFA());
    // this.renderer.setStyle(this.icon, 'color', this.dameColor());


    // this.renderer.listen(this.icon, 'click', (e) => {
    //   this.clicked.emit('Hola que tal');
    // });

    // this.renderer.appendChild(this.el.nativeElement, this.icon); // <td><i></i></td>
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.appCocheEstado) {      
      if (this.icon) {
        this.renderer.removeChild(this.el.nativeElement, this.icon);
      }

      this.icon = this.renderer.createElement('i'); // <i></i>
      this.renderer.addClass(this.icon, 'fa');
      this.renderer.addClass(this.icon, this.dameClaseFA());
      this.renderer.setStyle(this.icon, 'color', this.dameColor());


      this.renderer.listen(this.icon, 'click', (e) => {
        this.clicked.emit('Hola que tal');
      });

      this.renderer.appendChild(this.el.nativeElement, this.icon);
    }
  }

  private dameClaseFA(): string {
    return this.appCocheEstado ? 'fa-lock' : 'fa-lock-open';
  }

  private dameColor(): string {
    return this.appCocheEstado ? 'red' : 'green';
  }

}
