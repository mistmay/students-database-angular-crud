import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Student[], searchedKey: string): Student[] {
    if (!value || searchedKey === '') {
      return value;
    } else {
      return value.filter((element: Student) => element.name.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()) ||
        element.surname.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()) ||
        element.email.trim().toLowerCase().includes(searchedKey.trim().toLowerCase())
      );
    }
  }

}
