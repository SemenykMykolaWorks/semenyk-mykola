import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterPipe implements PipeTransform {
  transform(text: string, count: number): any {
    let result = [];
    if (count === 1) return [ text ];
    if (text === '') {
      for (let i = 0; i < count; i++) {
        result.push('');
      }
      return result;
    }
    if (text.length % count === 0) {
      result = text.match(new RegExp('.{1,' + (text.length / count) + '}', 'g'));
    } else {
      result = text.match(new RegExp('.{1,' + Math.ceil((text.length / count)) + '}', 'g'));
    }
    if (result.length < count) {
      for (let i = 0; i <= (count - (result.length)); i++) {
        result.push('');
      }
    }

    return result;
  }
}
