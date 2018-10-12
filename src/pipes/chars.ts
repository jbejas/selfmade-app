import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countdown'
})

export class CountdownPipe implements PipeTransform {
  transform(text: string, args: number) {
    let maxLength = args || 0;
    let length = text.length;
    let remaining = (maxLength - length);
    let chain = '';
    if(remaining < 0) {
        chain = '<span class="red">' + (maxLength - length) + ' characters left</span>';
    } else {
        chain = (maxLength - length) + " characters left";
    }
    return chain;
  }
}