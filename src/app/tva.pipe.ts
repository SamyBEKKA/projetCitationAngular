import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva',
  standalone: true
})
export class TvaPipe implements PipeTransform {

  transform(value: number, tvaRate: number = 0.20): number {
    if (!value) {
      return 0;
    }
    return value * (1 + tvaRate);
  }

}
