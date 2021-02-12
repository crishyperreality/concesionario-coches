import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potencia'
})
export class PotenciaPipe implements PipeTransform {

  cont = 0;
  transform(value: number): string {
    this.cont++;
    console.log(this.cont);
    return value + 'cv';
  }

}
