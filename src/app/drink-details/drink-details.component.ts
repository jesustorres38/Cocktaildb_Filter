import { CocktaildbService } from './../services/cocktaildb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {

  public drink_details = [];
  public ingredients = [];

  constructor(public service: CocktaildbService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.drink_details = [];
    this.service.fetchById(this.route.snapshot.params['id']).subscribe(data => {
      this.drink_details = data.drinks;
      this.getIngredients(data.drinks[0]);
    });
  }

  getIngredients(data){
    for (let x in data){
      if((x == "strIngredient1" || x == "strIngredient2" || x == "strIngredient3" || x == "strIngredient4" || x == "strIngredient5" || x == "strIngredient6" || x == "strIngredient7" || x == "strIngredient8" || x == "strIngredient9" || x == "strIngredient10" || x == "strIngredient11" || x == "strIngredient12" || x == "strIngredient13" || x == "strIngredient14" || x == "strIngredient15") && data[x]!=""){
        this.ingredients.push(" "+data[x]);
      }
    }
  }
}
