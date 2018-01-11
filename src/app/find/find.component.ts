import { CocktaildbService } from './../services/cocktaildb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  public categories = [];
  public results = [];
  public category_selected = "";

  constructor(public service: CocktaildbService) {
    // INITIALIZE ARRAYS
    this.categories = [];
    this.results = [];
    this.category_selected = "";

  }

  ngOnInit() {

    

  }
  searchByCategory(category){
    this.results = [];
    this.category_selected = category;
    this.service.fetchByCategory(category).subscribe(data => {
      this.results = data.drinks;
    });
  }

  prueba(){
    this.service.fetchCategories().subscribe(data => {
      this.categories = data.drinks;
    });
  }



}
