import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Custom Components
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Services
import { CocktaildbService } from './services/cocktaildb.service';


//Routes
const appRoutes: Routes = [
  { path: '', component: FindComponent },
  { path: 'find', component: FindComponent },
  { path: 'about', component: AboutComponent },
  { path:'drink-detail/:id', component: DrinkDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FindComponent,
    AboutComponent,
    DrinkDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CocktaildbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
