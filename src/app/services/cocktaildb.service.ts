import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CocktaildbService {


  constructor(private http: Http) { }

  // GET THE CATEGORIES
  fetchCategories(){
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .map(res => res.json());
  }

  // GET INGREDIETNS
  fetchIngredients(){
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .map(res => res.json());
  }

  // GET DRINKS BY CATEGORIES
  fetchByCategory(category){
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+category)
    .map(res => res.json());
  }
}
