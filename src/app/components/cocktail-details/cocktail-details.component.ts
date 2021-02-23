import { Component, OnInit } from '@angular/core';
import {CocktailApiService} from '../../services/cocktail-api.service';
import { Params,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  id:any;
  drink:any={};
  constructor( private cocktailApiService:CocktailApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.fetchCocktailsById(this.id);
  }
  
  fetchCocktailsById=function(id){
    this.cocktailApiService.getCocktailsById(id)
    .subscribe((data)=>{
      console.log(data);
      this.drink=data["drinks"][0];
      this.drink["IngredientsArr"]=[];
      for(let i=1;i<=15;i++){
        if(undefined!==this.drink["strIngredient"+i] && null!==this.drink["strIngredient"+i]){
          var ingredient=this.drink["strIngredient"+i];
          var finalString=ingredient;
          if(undefined!==this.drink["strMeasure"+i] && null!==this.drink["strMeasure"+i]){
            var measure=this.drink["strMeasure"+i];
            finalString+=" "+measure;
          }  
          this.drink["IngredientsArr"].push(finalString);
        }
        else{
          break;
        }
      }
    });
  }
}
