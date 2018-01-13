import { CocktaildbService } from './../services/cocktaildb.service';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  public results = []; //save the search
  public categories = []; //save the categories
  public category_selected = ""; //to know wich category is selected
  public searchTerm = ""; //the string to look for ingredients
  public compare = []; // to compare which drinks have the same ingredients
  public errorMessage = ""; //to show error and mesagges

  
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
    this.service.fetchByCategory(category).subscribe(
      data => {
        this.results = data.drinks;
        this.errorMessage = "";
      });
  }


  // SHOW DRINKS BY INGREDIENTS
  searchByIngredient(search){
    this.category_selected = "";
    this.compare = [];
    let ingredients = this.separateIngredients(search);
    for(let x of ingredients){
        this.service.fetchByIngredient(x).subscribe(
          data => {
            this.errorMessage = "";
            this.compare.push(data.drinks);
            this.compareResults(this.compare,ingredients);
          },
          error => {
            console.log(error);
            this.errorMessage = this.searchTerm;
          }
        );
      }
    }



  // GET INGREDIENTS SEPARATED IN ARRAY
  separateIngredients(ingredients){
    return ingredients.split(", ");
  }


  //COMPARE COMMON INGREDIENTS AND GET RESULT
  compareResults(compare,ingredients){
 
    if(compare.length==ingredients.length){

      if(compare.length == 1){
        this.results = _.intersectionWith(compare[0], _.isEqual);
        if(this.results.length==0){
          this.errorMessage=this.searchTerm;;
        }
      }

      if(compare.length > 1){
        while(compare.length > 1){
          var r = _.intersectionWith(compare[compare.length-1],compare[(compare.length-2)], _.isEqual);
          compare.splice(compare.length-2,2);
          compare.push(r);
          this.results = compare[0];
        }
        if(this.results.length==0){
          this.errorMessage=this.searchTerm;;
        }
      }
      
    }
    
  }

  
}