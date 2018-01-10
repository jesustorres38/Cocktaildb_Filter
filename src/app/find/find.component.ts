import { CocktaildbService } from './../services/cocktaildb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  public categories = [];
  public ingredients = [];

  constructor(public service: CocktaildbService) { }

  ngOnInit() {

    

  }

  prueba(){
    this.service.fetchCategories().subscribe(data => {
      console.log(data.drinks);
      this.categories = data.drinks;
    })
  }



}
