import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, position: string, textToAppend: string): string {
    return (position === 'pre') ? textToAppend + input : input + textToAppend;
  }

}
