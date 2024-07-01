import { Pipe, PipeTransform } from '@angular/core';
import { citation } from './entities';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  
    transform(citations: citation[], searchText: string): citation[] {
      if (!citations) {
        return [];
      }
      if (!searchText) {
        return citations;
      }
      searchText = searchText.toLowerCase();
  
      return citations.filter(citations => {
        return JSON.stringify(citations).toLowerCase().includes(searchText);
      });
    }

}
