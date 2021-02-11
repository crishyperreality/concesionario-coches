import {
  Directive, ElementRef, EventEmitter, Input,
  OnChanges, Output, Renderer2, SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appCocheEstado]'
})
export class CocheEstadoDirective implements OnChanges {

  @Input() appCocheEstado: boolean;
  @Output() clicked = new EventEmitter<string>();

  icon: HTMLElement; // undefined

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.appCocheEstado) {
      if (!this.icon) {
        this.crearYAñadirIcono();
      }

      this.renderer.removeClass(this.icon, 'fa-lock');
      this.renderer.removeClass(this.icon, 'fa-lock-open');
      const css = this.dameClaseCandado();
      if (css) {
        this.renderer.addClass(this.icon, css);
      }
      this.renderer.setStyle(this.icon, 'color', this.dameColorCandado());
    }
  }

  private crearYAñadirIcono(): void {
    this.icon = this.renderer.createElement('i');
    this.renderer.addClass(this.icon, 'fa');
    this.renderer.listen(this.icon, 'click', (e) => {
      this.clicked.emit('Hola que tal');
    });
    this.renderer.appendChild(this.el.nativeElement, this.icon);
  }

  private dameClaseCandado(): string {
    if (this.appCocheEstado !== null && this.appCocheEstado !== undefined) {
      return this.appCocheEstado ? 'fa-lock' : 'fa-lock-open';
    }

    return '';
  }

  private dameColorCandado(): string {
    return this.appCocheEstado ? 'red' : 'green';
  }

}
