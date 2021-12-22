import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string): string {
    const data = new Date(value);
    if (!data) return data;

    return moment().diff(data, 'years') + ' Anos';
  }
}
