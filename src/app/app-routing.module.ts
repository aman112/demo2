import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'cocktails',component:CocktailsComponent}, 
  { path: 'cocktaildetails/:id', component : CocktailDetailsComponent},
  {path:'',redirectTo:'cocktails',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
