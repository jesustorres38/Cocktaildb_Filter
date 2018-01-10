import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//Custom Components
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Pipes
import { CategoryPipe } from './pipes/category.pipe';
import { IngredientsPipe } from './pipes/ingredients.pipe';

//Services
import { CocktaildbService } from './services/cocktaildb.service';


//Routes
const appRoutes: Routes = [
  { path: '', component: FindComponent },
  { path: 'find', component: FindComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FindComponent,
    AboutComponent,
    CategoryPipe,
    IngredientsPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CocktaildbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
