import { CocktaildbService } from './../services/cocktaildb.service';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {


  public results = [];
  public categories = [];
  public category_selected = "";
  public searchTerm: string = "";
  public compare = [];

    
  // INITIALIZE VALUES
  constructor(public service: CocktaildbService) {
    this.category_selected = "";
  }


  // SHOW ALL THE CATEGORIES OF DRINKS
  ngOnInit() {
    this.categories = [];
    this.service.fetchCategories().subscribe(data => {
      this.categories = data.drinks;
    });
  }


  // SHOW DRINKS BY ONE CATEGORY SELECTED
  searchByCategory(category){
    this.category_selected = category;
    this.service.fetchByCategory(category).subscribe(data => {
      this.results = data.drinks;
      console.log(this.results);
    });
  }


  // SHOW DRINKS BY INGREDIENTS
  searchByIngredient(search){
    this.compare = [];
    let ingredients = this.separateIngredients(search);
    for(let x of ingredients){
        this.service.fetchByIngredient(x).subscribe(
          data => {
            this.compare.push(data.drinks);
          },
          error => {
            console.log(error);
          }
        );
      }
    setTimeout(() => this.compareResults(this.compare), 2000);
  }


  // GET INGREDIENTS SEPARATED IN ARRAY
  separateIngredients(ingredients){
    return ingredients.split(", ");
  }


  //COMPARE COMMON INGREDIENTS AND GET RESULT
  compareResults(compare){
    if(compare.length == 0){
      console.log('error es 0');
    }

    if(compare.length == 1){
      this.results = _.intersectionWith(compare[0], _.isEqual);
    }

    if(compare.length > 1){
      while(compare.length > 1){
        var r = _.intersectionWith(compare[compare.length-1],compare[(compare.length-2)], _.isEqual);
        compare.splice(compare.length-2,2);
        compare.push(r);
        this.results = compare[0];
      }
    }
    // if(compare.length == 2){
    //   this.results = _.intersectionWith(compare[0],compare[1], _.isEqual);    
    // }
    // if(compare.length == 3){
    //   this.results = _.intersectionWith(compare[0],compare[1],compare[2], _.isEqual);    
    // }
    // setTimeout(() => console.log(this.results), 2000);
  }
}