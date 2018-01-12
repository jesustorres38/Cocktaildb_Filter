import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CocktaildbService {

  constructor(private http: Http) { }

  // GET ALL THE CATEGORIES
  fetchCategories(){
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .map(res => res.json());
  }


  // GET DRINKS BY ONE CATEGORY
  fetchByCategory(category){
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+category)
    .map(res => res.json());
  }


  // GET DRINKS BY INGREDIETNS
  fetchByIngredient(ingredient){
    return this.http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ingredient)
    .map(res => res.json()); 
  }


}
