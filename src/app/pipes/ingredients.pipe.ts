import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients'
})
export class IngredientsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
