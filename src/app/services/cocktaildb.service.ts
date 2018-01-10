import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CocktaildbService {


  constructor(private http: Http) { }

  fetchCategories(){
    // Make the HTTP request:
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .map(res => res.json());
  }

}
